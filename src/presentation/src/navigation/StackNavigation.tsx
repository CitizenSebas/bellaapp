import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  LoginScreen,
  RegisterScreeen,
  ResetScreen,
  OnBoarding,
} from "../screens";
import { Ionicons } from "@expo/vector-icons";

export type RootStackParams = {
  OnBoarding: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ResetScreen: undefined;
  messageScreen: { message: string; iconName: keyof typeof Ionicons.glyphMap };
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreeen} />
      <Stack.Screen name="ResetScreen" component={ResetScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
