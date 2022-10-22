import React from "react";
import { View, Text } from "react-native";
import { useInitialNavigation } from "../../../hooks/navigation";
import { term } from "./mock";

import Button from "../../../components/Button";

import { styles } from "./styles";

export default function Terms() {
  const navigation = useInitialNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Termo de uso</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.textContent}>{term}</Text>
        <Button title="Aceitar" onPress={() => navigation.navigate("SignIn")} />
      </View>
    </View>
  );
}
