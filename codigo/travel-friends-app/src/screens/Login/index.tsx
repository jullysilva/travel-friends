import { Button, Container, TextField } from '@mui/material';
import React from 'react'
import { View } from 'react-native'


export const LoginScreen = () => {


  return(
    <Container>
      <TextField label="Email" variant="outlined"/>
      <TextField label="Senha" variant="outlined"/>
      <Button variant="contained">Entrar</Button>
    </Container>
  );
}