import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  ArrivedScreen,
  DesignScreen,
  LongScreen,
  SwinScreen,
  TopWearScreen,
} from "../screens";
import { BottomNavigation } from "./BottomNavigation";
import { CustomDrawer } from "../components/ui/drawer/CustomDrawer";
import { Header } from "../components";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export type RootDrawerParams = {
  HomeScreenDrawer: undefined;
  ArrivedScreen: undefined;
  DesignScreen: undefined;
  LongScreen: undefined;
  SwinScreen: undefined;
  TopWearScreen: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

export const DrawerNavigation = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      drawerContent={() => <CustomDrawer />}
      screenOptions={{
        headerShown: true,
        header: () => (
          <Header
            iconName="menu"
            cb={() => navigation.dispatch(DrawerActions.openDrawer)}
          />
        ),
        drawerStyle: {
          width: "100%",
        },
      }}
    >
      <Drawer.Screen name="HomeScreenDrawer" component={BottomNavigation} />
      <Drawer.Screen name="ArrivedScreen" component={ArrivedScreen} />
      <Drawer.Screen name="DesignScreen" component={DesignScreen} />
      <Drawer.Screen name="LongScreen" component={LongScreen} />
      <Drawer.Screen name="SwinScreen" component={SwinScreen} />
      <Drawer.Screen name="TopWearScreen" component={TopWearScreen} />
    </Drawer.Navigator>
  );
};
