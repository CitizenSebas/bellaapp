import { Pressable, Text, View, StyleSheet, Image } from "react-native";
import { colors } from "../../../../../config/theme/app-theme";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  cb: () => void;
  bgColor: string;

  iconName: keyof typeof Ionicons.glyphMap;
  text: string;
  width?: number;
}

export const CustomButton = ({ cb, bgColor, iconName, text, width }: Props) => {
  return (
    <Pressable
      onPress={cb}
      style={[
        styles.button,
        {
          backgroundColor: bgColor,
          width: width,
          borderWidth: bgColor.length > 0 ? 0 : 2,
        },
      ]}
    >
      <View style={styles.buttonContent}>
        <Ionicons
          name={iconName}
          color={bgColor.length > 0 ? "white" : colors.primary}
          size={32}
        />
        <Text
          style={[
            styles.buttonText,
            { color: bgColor?.length > 0 ? "white" : colors.primary },
          ]}
        >
          {text}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
