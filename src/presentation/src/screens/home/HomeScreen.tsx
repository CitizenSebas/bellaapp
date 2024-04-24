import { Text, View } from "react-native";
import { globalStyles } from "../../../../config/theme/app-theme";
import { CustomButton } from "../../components";
import { useAuth } from "../../hooks/useAuth";

export const HomeScreen = () => {
  const { logout } = useAuth();

  return (
    <View style={globalStyles.mainContainer}>
      <Text>HomeScreen</Text>
      <CustomButton
        bgColor=""
        text="Logout"
        cb={logout}
        iconName="exit-outline"
      />
    </View>
  );
};
