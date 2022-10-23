import React from "react";
import { Text } from "react-native";

type TextProps = {
  size: number;
  color?: string;
  isBold?: boolean;
  text: string;
  fontWeight?: "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700";
};

export default function TextApp({
  color,
  size,
  isBold,
  text,
  fontWeight,
}: TextProps) {
  return isBold ? (
    <Text style={{ color: color, fontSize: size, fontWeight: "bold" }}>
      {text}
    </Text>
  ) : (
    <Text style={{ color: color, fontSize: size, fontWeight: fontWeight }}>
      {text}
    </Text>
  );
}
