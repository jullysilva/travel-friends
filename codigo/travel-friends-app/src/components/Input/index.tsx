import React from "react";
import { View, Text, TextInput } from "react-native";

import { styles } from "./styles";

type InputProps = {
  text: string;
};

export default function Input({ text }: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}
