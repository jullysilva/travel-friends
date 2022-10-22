import React, { ReactNode } from "react";
import { StatusBar, View } from "react-native";

import theme from "../../utils/theme";

import { styles } from "./styles";

type StatusBarProps = {
  children: ReactNode;
  hiden?: boolean;
  isBlue?: boolean;
};

export default function ContainerDefault({
  children,
  hiden,
  isBlue,
}: StatusBarProps) {
  return (
    <View style={[styles.container]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={isBlue ? theme.colors.primary : theme.colors.shape}
        hidden={hiden}
      />

      {children}
    </View>
  );
}
