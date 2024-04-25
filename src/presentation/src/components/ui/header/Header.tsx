import { Pressable, View, Image, StyleSheet, Platform } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../../../../config/theme/app-theme";

interface Props {
  cb: () => void;
  iconName: keyof typeof Ionicons.glyphMap;
}

export const Header = ({ cb, iconName }: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.header,
        {
          marginTop: Platform.OS === "ios" ? top + 20 : top - 10,
        },
      ]}
    >
      <Image source={require("../../../../../../assets/img/logoMini.png")} />

      <Pressable style={styles.button} onPress={cb}>
        <Ionicons name={iconName} size={40} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 40,
  },
  button: {
    backgroundColor: colors.black,
    borderRadius: 10,
  },
});
