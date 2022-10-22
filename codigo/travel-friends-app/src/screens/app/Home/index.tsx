import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { userHook } from "../../../contexts/userData";

import { getAllRoadmap } from "../../../services/api/app/roteiros";

import ContainerDefault from "../../../components/ContainerDefault";
import Header from "../../../components/Header";

import { style } from "./styles";

export default function Home() {
  const user = userHook();

  useEffect(() => {
    getAllRoadmap();
  }, []);

  const { userData } = user;
  return (
    <View style={style.container}>
      <ContainerDefault isBlue>
        <Header />
        <Text> {userData.email} </Text>
      </ContainerDefault>
    </View>
  );
}
