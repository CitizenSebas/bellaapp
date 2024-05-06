import { PropsWithChildren } from "react";
import { ScrollView } from "react-native";

interface Props extends PropsWithChildren {
  horizontal: boolean;
}

export const CustomScroll = ({ children, horizontal }: Props) => {
  return (
    <ScrollView horizontal={horizontal} showsHorizontalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};
