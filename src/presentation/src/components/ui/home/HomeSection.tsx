import { Text, View, StyleSheet, Pressable } from "react-native";

interface Props {
  title: string;
}

export const HomeSection = ({ title }: Props) => {
  return (
    <View style={styles.arrived}>
      <Text style={styles.arrivedTitle}>{title}</Text>
      <Pressable>
        <Text>View all</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  arrived: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  arrivedTitle: {
    fontSize: 18,
    fontWeight: "900",
  },
});
