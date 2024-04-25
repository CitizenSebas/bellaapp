import { Text, View, Image, ScrollView } from "react-native";
import { ScreenLayout } from "../../layout/ScreenLayout";
import { Discount, SearchInput } from "../../components";

export const HomeScreen = () => {
  return (
    <ScreenLayout>
      <View style={{ flex: 1, alignItems: "center", gap: 10 }}>
        <Image
          source={require("../../../../../assets/img/header.png")}
          width={500}
          height={500}
        />

        <SearchInput />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Discount
            label="40%"
            text="On everything"
            imageName={require("../../../../../assets/img/woman1.png")}
          />
          <Discount
            label="70%"
            text="On select collection"
            imageName={require("../../../../../assets/img/woman2.png")}
          />
        </ScrollView>

        <View>
          <Text>Just Arrived</Text>
          <Text>View all</Text>
        </View>
      </View>
    </ScreenLayout>
  );
};
