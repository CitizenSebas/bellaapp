import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  ImageSourcePropType,
} from "react-native";
import { colors } from "../../../../../config/theme/app-theme";

interface Props {
  label: string;
  text: string;
  onPress?: () => void;
  imageName: ImageSourcePropType;
}

export const Discount = ({ label, text, onPress, imageName }: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            marginVertical: 70,
          }}
        >
          <Text style={styles.label}>{`${label} Off`}</Text>
          <Text style={styles.text}>{text}</Text>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>shop now</Text>
          </Pressable>
        </View>
      </View>

      <Image source={imageName} style={{ alignItems: "flex-end" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    backgroundColor: colors.gray,
    borderRadius: 20,
    flexDirection: "row",
    height: 200,
    justifyContent: "center",
    marginHorizontal: 10,
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 20,
  },
  label: {
    fontSize: 24,
    fontWeight: "600",
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    marginVertical: 5,
    padding: 2,
    width: 70
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
  },
});
