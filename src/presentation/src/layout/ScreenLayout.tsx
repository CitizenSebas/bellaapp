import { PropsWithChildren } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { globalStyles } from "../../../config/theme/app-theme";

interface Props extends PropsWithChildren {}

export const ScreenLayout = ({ children }: Props) => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <SafeAreaView style={globalStyles.mainContainer}>{children}</SafeAreaView>
    </ScrollView>
  );
};
