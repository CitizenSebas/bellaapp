import { StyleSheet } from "react-native";
import { colors } from "../../../config/theme/app-theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CardScreen, HomeScreen, List, ProfileScreen } from "../screens";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "../components/ui/header/Header";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export type RootBottomParams = {
  ProfileScreen: undefined;
  HomeScreen: undefined;
  WishListScreen: undefined;
  CardScreen: undefined;
};

const Tabs = createBottomTabNavigator<RootBottomParams>();

export const BottomNavigation = () => {
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabel: "",
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={32}
              name="home"
              color={focused ? colors.primary : colors.black}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={32}
              name="person"
              color={focused ? colors.primary : colors.black}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="WishListScreen"
        component={List}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={32}
              name="heart"
              color={focused ? colors.primary : colors.black}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="CardScreen"
        component={CardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={32}
              name="cart"
              color={focused ? colors.primary : colors.black}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    height: 70,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
