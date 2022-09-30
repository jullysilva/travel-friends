import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useInitialNavigation } from "../../../hooks/navigation";
import { term } from "./mock";

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
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={{ color: "white", fontSize: 22 }}>Aceitar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
