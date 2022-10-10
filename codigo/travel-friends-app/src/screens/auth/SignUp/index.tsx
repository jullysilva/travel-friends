import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useInitialNavigation } from "../../../hooks/navigation";

import { styles } from "./styles";

export default function SignUp() {
  const navigation = useInitialNavigation();
  return (
    <View style={styles.container}>
      <Text>Cadastrar</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        <Text style={{ color: "white", fontSize: 22 }}>Aceitar</Text>
      </TouchableOpacity>
    </View>
  );
}
