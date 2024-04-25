import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../navigation/StackNavigation";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../../firebase.config";
import { useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  //Register func
  const onRegister = async () => {
    if ([user.username, user.email, user.password, user.confirm].includes("")) {
      console.log({ errors: "All fields are required" });
      return;
    }

    await createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(async (userCrendential) => {
        const AuthUser = userCrendential.user;

        await sendEmailVerification(AuthUser);

        await updateProfile(AuthUser, {
          displayName: user.username,
        });

        navigation.navigate("LoginScreen");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          console.log({ errors: "invalid-email" });
          return;
        } else if (error.code === "auth/weak-password") {
          console.log({ errors: "Password  should be at least 6 characters" });
          return;
        } else if (error.code === "auth/email-already-in-use") {
          console.log({ errors: "email already in use" });
          return;
        } else if (error.code) {
          console.log({ errors: "something went wrong" });
          return;
        }
      });

    setUser({
      username: "",
      email: "",
      password: "",
      confirm: "",
    });
  };

  //login func
  const onLogin = async () => {
    //todo: email verifed requiered

    if ([user.email, user.password].includes("")) {
      console.log("Todos los campos son obligatorios");
      return;
    }

    await signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCrendential) => {
        navigation.navigate("HomeScreenStack");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          console.log({ errors: "user not found" });
          return;
        } else if (error.code === "auth/wrong-password") {
          console.log({ errors: "wrong password" });
          return;
        } else if (error.code === "auth/invalid-credential") {
          console.log({ errors: "Invalid credential" });
          return;
        } else if (error.code) {
          console.log(error);

          console.log({ errors: "something went wrong" });
          return;
        }
      });

    setUser({
      ...user,
      email: "",
      password: "",
    });
  };

  const recoveryPassword = async () => {
    if (user.email === "") {
      return;
    }

    await sendPasswordResetEmail(auth, user.email)
      .then((userCrendential) => {
        console.log("Enviando correo");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          return;
        }
      });

    setUser({
      ...user,
      email: "",
    });
  };

  const logout = async () => {
    await signOut(auth).then((userCrendential) => {
      navigation.navigate("OnBoarding");
    });
  };

  return {
    //info
    user,
    setUser,
    //methods
    onRegister,
    onLogin,
    recoveryPassword,
    logout,
  };
};
