import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useInitialNavigation } from "../../../hooks/navigation";

import { styles } from "./styles";

export default function SignIn() {
  const navigation = useInitialNavigation();
  return (
    <View style={styles.container}>
      <Text>login</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={{ color: "white", fontSize: 22 }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
