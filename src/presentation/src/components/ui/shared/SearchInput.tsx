import { TextInput, View, StyleSheet } from "react-native";
import { colors } from "../../../../../config/theme/app-theme";
import { Ionicons } from "@expo/vector-icons";

export const SearchInput = () => {
  return (
    <View style={styles.search}>
      <Ionicons name="search" size={32} />
      <TextInput placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.gray,
    padding: 10,
    borderRadius: 100,
    gap: 5,
    width: 360,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 7,
  },
});
