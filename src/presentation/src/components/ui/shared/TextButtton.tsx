import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../../../../../config/theme/app-theme";

interface Props {
  text: string;
  fn: () => void;
}

export const TextButtton = ({ text, fn }: Props) => {
  return (
    <Pressable onPress={fn} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-end',
    paddingTop: 10
  },
  buttonText: {
    textAlign: "left",
    color: colors.secondary,
    fontSize: 16,
    textDecorationLine: 'underline'
  },
});
