import React from "react";
import { Text, View, KeyboardAvoidingView } from "react-native";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useInitialNavigation } from "../../../hooks/navigation";

import { styles } from "./styles";

export default function SignIn() {
  const navigation = useInitialNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Entrar</Text>
      </View>
      <View style={styles.content}>
        <KeyboardAvoidingView>
          <Input text="E-mail" />
          <Input text="Senha" />
          <Button
            onPress={() => navigation.navigate("SignUp")}
            title="Entrar"
          />
        </KeyboardAvoidingView>
        <Text>Não tem uma conta?</Text>
      </View>
    </View>
  );
}
