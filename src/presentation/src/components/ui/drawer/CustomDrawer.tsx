import { View, StyleSheet, ScrollView } from "react-native";
import { CustomButton, Header } from "../..";
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { RootDrawerParams } from "../../../navigation/DrawerNavigation";

export const CustomDrawer = () => {
  const navigation = useNavigation<NavigationProp<RootDrawerParams>>();

  return (
    <ScrollView style={styles.container}>
      <Header
        iconName="close"
        cb={() => navigation.dispatch(DrawerActions.closeDrawer)}
      />

      <View style={styles.buttonsContainer}>
        <CustomButton
          bgColor={false}
          text="Just Arrived"
          iconName="storefront-outline"
          cb={() => navigation.navigate('ArrivedScreen')}
        />

        <CustomButton
          bgColor={false}
          text="Designer Picker"
          iconName="card-outline"
          cb={() => navigation.navigate('DesignScreen')}
        />

        <CustomButton
          bgColor={false}
          text="Swim Suits"
          iconName="water-outline"
          cb={() => navigation.navigate('SwinScreen')}
        />
        <CustomButton
          bgColor={false}
          text="Top wear"
          iconName="pricetags-outline"
          cb={() => navigation.navigate('TopWearScreen')}
        />
        <CustomButton
          bgColor={false}
          text="Long clothes"
          iconName="accessibility-outline"
          cb={() => navigation.navigate('LongScreen')}
        />
      </View>

      <View style={styles.divider} />

      <View style={{ marginVertical: 60 }}>
        <CustomButton
          text="Logout"
          cb={() => {}}
          bgColor
          iconName="exit-outline"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  buttonsContainer: {
    marginTop: 40,
    gap: 60,
  },
  divider: {
    borderWidth: 1,
    marginTop: 40,
  },
});
