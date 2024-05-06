import { View, Image, StyleSheet } from "react-native";
import { ScreenLayout } from "../../layout/ScreenLayout";
import {
  SearchInput,
  HomeSection,
  DiscountScroll,
  ProductScroll,
  DesignScroll,
} from "../../components";

export const HomeScreen = () => {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Image source={require("../../../../../assets/img/header.png")} />
        <SearchInput />

        <DiscountScroll />

        <HomeSection title="Just Arrived" />

        <ProductScroll />

        <HomeSection title="Designer Picked" />
        <DesignScroll />
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
});
