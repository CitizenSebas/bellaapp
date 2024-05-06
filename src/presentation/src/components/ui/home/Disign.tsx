import {
  ImageSourcePropType,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { globalStyles } from "../../../../../config/theme/app-theme";

interface Props {
  imageSource: ImageSourcePropType;
  title: string;
  price: string;
  collection: string;
}

export const Disign = ({ imageSource, title, price, collection }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        gap: 80,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{
        flexDirection: 'row',
        gap: 40
      }}>
        <Image source={imageSource} />
        <View>
          <Text style={globalStyles.productTitle}>{title}</Text>

          <Text style={globalStyles.productTitle}>Collection</Text>
          <Text style={globalStyles.productLabel}>{collection}</Text>
          <Text style={globalStyles.productPrice}>{`$ ${price}`}</Text>
        </View>
      </View>

      <Pressable>
        <Text>{price}</Text>
      </Pressable>
    </View>
  );
};
