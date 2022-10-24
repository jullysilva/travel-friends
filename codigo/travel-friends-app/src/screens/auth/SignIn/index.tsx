import React, { useState } from "react";
import { Text, View, KeyboardAvoidingView } from "react-native";
import * as EmailValidator from 'email-validator';
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useInitialNavigation } from "../../../hooks/navigation";
import { authUser } from '../../../services/api/auth/login'

import { styles } from "./styles";

export default function SignIn() {
  const navigation = useInitialNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const onSubmit = async () => {
    const data = {
      email: email,
      password: password
    }
    if (!isError) {
      const res = await authUser(data);
      console.log(res);
      // navigation.navigate("SignUp");
    }

  }

  const handleCheck = () => {
    if (EmailValidator.validate(email)) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Entrar</Text>
      </View>
      <View style={styles.content}>
        <KeyboardAvoidingView>
          <Input text="E-mail" value={email} onChangeText={(text) => setEmail(text)} onBlur={handleCheck} />
          <Input text="Senha" value={password} onChangeText={(text) => setPassword(text)} />
          <Button
            onPress={onSubmit}
            title="Entrar"
          />
        </KeyboardAvoidingView>
        <Text>Não tem uma conta?</Text>
      </View>
    </View>
  );
}

