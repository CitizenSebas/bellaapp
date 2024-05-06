import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../../config/theme/app-theme";

interface Props {
  image: ImageSourcePropType;
  price: string;
  store: string;
  title: string;
}

export const ProductCard = ({ image, price, store, title }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.store}>{store}</Text>

        <View style={styles.add}>
          <Text style={styles.price}>{`$ ${price}`}</Text>

          <Pressable style={styles.button}>
            <Ionicons name="add" size={22} color='white'/>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    gap: 4,
    width: 150
  },
  image: {},
  info: {},
  title: {
    color: colors.blueDark,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
  },
  store: {
    color: colors.gray,
    fontWeight: 'bold'
  },
  add: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  price: {
    fontSize: 15,
    fontWeight: '900'
  },
  button: {
    backgroundColor: colors.black,
    borderRadius: 100,
    padding: 10
  }
});
