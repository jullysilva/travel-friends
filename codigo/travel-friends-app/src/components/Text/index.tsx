import React from "react";
import { Text } from "react-native";

type TextProps = {
  size: number;
  color?: string;
  isBold?: boolean;
  text: string;
};

export default function TextApp({ color, size, isBold, text }: TextProps) {
  return isBold ? (
    <Text style={{ color: color, fontSize: size, fontWeight: "bold" }}>
      {text}
    </Text>
  ) : (
    <Text style={{ color: color, fontSize: size }}> {text}</Text>
  );
}
