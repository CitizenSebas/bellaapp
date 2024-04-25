import { View, StyleSheet } from "react-native";
import { CustomButton, Logo } from "../../components";
import { ScreenLayout } from "../../layout/ScreenLayout";
import { colors } from "../../../../config/theme/app-theme";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/StackNavigation";

interface Props extends StackScreenProps<RootStackParams, "OnBoarding"> {}

export const OnBoarding = ({ navigation }: Props) => {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Logo />

        <View style={styles.buttons}>
          <CustomButton
            iconName="log-in"
            text="Login"
            cb={() => navigation.navigate("LoginScreen")}
            width={400}
            bgColor=""
          />
          <CustomButton
            iconName="create-outline"
            text="Sign Up"
            cb={() => navigation.navigate("RegisterScreen")}
            bgColor={colors.primary}
            width={320}
          />
        </View>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    marginVertical: 60,
    marginHorizontal: 20
  },
  buttons: {
    alignItems: "center",
    gap: 20,
  },
});
