import { PropsWithChildren } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { globalStyles } from "../../../config/theme/app-theme";

interface Props extends PropsWithChildren {}

export const AuthLayout = ({ children }: Props) => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <SafeAreaView style={globalStyles.mainContainer}>{children}</SafeAreaView>
    </ScrollView>
  );
};
