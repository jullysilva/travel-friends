import React from "react";
import { KeyboardAvoidingView, Text, View } from "react-native";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useInitialNavigation } from "../../../hooks/navigation";

import { styles } from "./styles";

export default function SignUp() {
  const navigation = useInitialNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Registrar</Text>
      </View>
      <View style={styles.content}>
        <KeyboardAvoidingView>
          <Input text="Nome" />
          <Input text="E-mail" />
          <Input text="Senha" />
          <Button
            onPress={() => navigation.navigate("ForgotPassword")}
            title="Registrar"
          />
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}
