import { Text, View, TextInput, StyleSheet, ScrollView } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { ScreenLayout } from "../../layout/ScreenLayout";
import { CustomButton, Logo, TextButtton } from "../../components";
import { colors, globalStyles } from "../../../../config/theme/app-theme";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/StackNavigation";

interface Props extends StackScreenProps<RootStackParams, "LoginScreen"> {}

export const LoginScreen = ({ navigation }: Props) => {
  const { user, setUser, onLogin } = useAuth();

  return (
    <ScreenLayout>
      <View>
        <Logo />
        <View style={styles.form}>
          <TextInput
            placeholder="Email"
            style={globalStyles.textInput}
            value={user.email}
            onChangeText={(value) => setUser({ ...user, email: value })}
            autoCapitalize='none'
            autoCorrect={false}
          />
          <View>
            <TextInput
              placeholder="password"
              style={globalStyles.textInput}
              value={user.password}
              onChangeText={(value) => setUser({ ...user, password: value })}
              secureTextEntry
              autoCapitalize='none'
              autoCorrect={false}
            />
            <TextButtton
              text="did you forget your password?"
              fn={() => navigation.navigate("ResetScreen")}
            />
          </View>

          <CustomButton
            iconName="log-in"
            text="Login"
            bgColor={false}
            cb={onLogin}
          />

          <Text style={styles.text}>Or</Text>

          <CustomButton
            text="Continue with Google"
            iconName="logo-google"
            bgColor
            cb={() => navigation.navigate("RegisterScreen")}
          />

          <CustomButton
            iconName="logo-facebook"
            text="Login"
            bgColor
            cb={() => console.log("Hola mundo")}
          />
        </View>
      </View>
    
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  form: {
    gap: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 22,
    textTransform: "uppercase",
    textAlign: "center",
  },
});
