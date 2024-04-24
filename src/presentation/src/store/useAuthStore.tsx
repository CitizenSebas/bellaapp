import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { create } from "zustand";
import { auth } from "../../../../firebase.config";

export interface AuthState {
  errors: string;
  register: (
    username: string,
    email: string,
    password: string,
    confirm: string
  ) => void;
}

export const useAuthStorage = create<AuthState>()((set) => ({
  errors: "",
  register: async (
    username: string,
    email: string,
    password: string,
    confirm: string
  ) => {
    if ([username, email, password, confirm].includes("")) {
      set({ errors: "All fields are required" });
      return;
    }

    if (password !== confirm) {
      set({ errors: "passwords are not the same" });
      return;
    }

    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCrendential) => {
        const user = userCrendential.user;

        await sendEmailVerification(user);

        await updateProfile(user, {
          displayName: username,
        });
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          set({ errors: "invalid-email" });
          return;
        } else if (error.code === "auth/weak-password") {
          set({ errors: "Password  should be at least 6 characters" });
          return;
        } else if (error.code === "auth/email-already-in-use") {
          set({ errors: "email already in use" });
          return;
        } else if (error.code) {
          set({ errors: "something went wrong" });
          return;
        }
      });
  },
}));
