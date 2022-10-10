import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { userHook } from "../../../contexts/userData";

import { style } from "./styles";

export default function Home() {
  const user = userHook();

  const { userData } = user;
  return (
    <View style={style.container}>
      <Text> {userData.email} </Text>
    </View>
  );
}
