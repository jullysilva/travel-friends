import React from "react";
import {
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useInitialNavigation } from "../../../hooks/navigation";

import { styles } from "./styles";

export default function ForgotPassword() {
  const navigation = useInitialNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recuperar senha</Text>
      </View>
      <View style={styles.content}>
        <KeyboardAvoidingView>
          <Input text="E-mail" />
          <Input text="Nova Senha" />
          <Input text="Repetir Senha" />
          <Button
            onPress={() => navigation.navigate("Terms")}
            title="Acessar"
          />
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}
