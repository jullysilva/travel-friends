import React from "react";
import { View } from "react-native";

import { userHook } from "../../contexts/userData";

import TextApp from "../Text";
import theme from "../../utils/theme";
import { styles } from "./styles";

type HeaderProps = {
  title: string;
  color: string;
};

export default function Header() {
  const user = userHook();
  const { colors, fonts } = theme;
  return (
    <View style={styles.container}>
      <TextApp
        color={colors.shape}
        size={fonts.title}
        text={`Olá, ${user.userData.name}`}
      />
      <TextApp color={colors.shape} size={fonts.text} text="O que planeja?" />
    </View>
  );
}
