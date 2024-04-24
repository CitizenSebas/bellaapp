import { TextInput, View, Text, StyleSheet } from "react-native";
import { AuthLayout } from "../../layout/AuthLayout";
import { CustomButton, Logo } from "../../components";
import { colors, globalStyles } from "../../../../config/theme/app-theme";
import { useAuth } from "../../hooks/useAuth";

export const ResetScreen = () => {
  const { recoveryPassword, user, setUser } = useAuth();

  return (
    <AuthLayout>
      <Logo />

      <View style={globalStyles.form}>
        <Text style={styles.text}>
          Write your email, to send an account recovery email
        </Text>

        <View>
          <TextInput
            style={globalStyles.textInput}
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            value={user.email}
            onChangeText={(value) => setUser({ ...user, email: value })}
          />
        </View>

        <CustomButton
          iconName="send-outline"
          cb={recoveryPassword}
          bgColor={colors.primary}
          text="Send Email"
        />
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
});
