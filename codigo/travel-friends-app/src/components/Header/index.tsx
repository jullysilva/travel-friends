import React from "react";
import { TouchableOpacity, View } from "react-native";

import { userHook } from "../../contexts/userData";

import TextApp from "../Text";
import theme from "../../utils/theme";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";

type HeaderProps = {
  title: string;
  color: string;
};

export default function Header() {
  const user = userHook();
  const { colors, fonts } = theme;
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <TextApp
          color={colors.shape}
          size={fonts.title}
          text={`Olá, ${user.userData.name}.`}
        />
        <TextApp color={colors.shape} size={fonts.text} text="O que planeja?" />
      </View>
      <View style={styles.bell}>
        <TouchableOpacity onPress={() => {}}>
          <FontAwesome name={"bell"} size={28} color={colors.fild} />
          <TextApp size={12} text={"5"} color={colors.shape} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
