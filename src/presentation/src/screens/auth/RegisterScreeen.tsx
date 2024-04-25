import { Text, TextInput, View, StyleSheet } from "react-native";
import { colors, globalStyles } from "../../../../config/theme/app-theme";
import { Logo, CustomButton } from "../../components";
import { ScreenLayout } from "../../layout/ScreenLayout";
import { useAuth } from "../../hooks/useAuth";

export const RegisterScreeen = () => {
  const { onRegister, user, setUser } = useAuth();

  return (
    <ScreenLayout>
      <View>
        <Logo />

        <View style={globalStyles.form}>
          <Text style={styles.title}>Create a new account</Text>

          <View style={styles.field}>
            <Text style={styles.label}>Username*</Text>
            <TextInput
              value={user.username}
              onChangeText={(value) => setUser({ ...user, username: value })}
              placeholder="Username"
              style={globalStyles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Email*</Text>
            <TextInput
              value={user.email}
              onChangeText={(value) => setUser({ ...user, email: value })}
              placeholder="Email"
              style={globalStyles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Password*</Text>
            <TextInput
              value={user.password}
              onChangeText={(value) => setUser({ ...user, password: value })}
              placeholder="password"
              style={globalStyles.textInput}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Confirm Password*</Text>
            <TextInput
              value={user.confirm}
              onChangeText={(value) => setUser({ ...user, confirm: value })}
              placeholder="confirm password"
              style={globalStyles.textInput}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <CustomButton
            iconName="log-in"
            text="sign up"
            bgColor={false}
            cb={onRegister}
          />
        </View>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  field: {
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
  },
  label: {
    fontWeight: "600",
    fontSize: 20,
  },
});
