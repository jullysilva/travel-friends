import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useInitialNavigation } from "../../../hooks/navigation";

import { styles } from "./styles";

export default function ForgotPassword() {
  const navigation = useInitialNavigation();

  return (
    <View style={styles.container}>
      <Text>forgot passWord</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={{ color: "white", fontSize: 22 }}>Senha</Text>
      </TouchableOpacity>
    </View>
  );
}
