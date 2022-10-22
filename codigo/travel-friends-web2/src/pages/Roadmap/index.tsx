import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import { Button, Paper, Container, Switch, FormGroup, FormControlLabel } from "@material-ui/core";
import { getRoadmap } from '../../services/api/Requests/roadmap'

const Roadmap = () => {
  const roteiro = {
    titulo: '',
    isFree: false,
    valor: 0.0,
    tipo: '',
    qntd: 0.0,
    inicio: null,
    fim: null,
    participantes: [],
  }

  const [textValue, setTextValue] = useState<string>("");

  const onTextChange = (e: any) => setTextValue(e.target.value);
  const handleSubmit = () => console.log(textValue);
  const handleReset = () => {
    getRoadmap();
    setTextValue("");
  }

  return(
    <Container>
      <FormGroup>

      <Paper>
        <h2>Criar roteiro</h2>

        <TextField
          onChange={onTextChange}
          value={textValue}
          label={"Título"} //optional
          />

          <FormControlLabel control={<Switch />} label="Gratuito" />
          
          <TextField
          onChange={onTextChange}
          value={textValue}
          label={"Título"} //optional
          />
          <TextField
          onChange={onTextChange}
          value={textValue}
          label={"Título"} //optional
          />
          <TextField
          onChange={onTextChange}
          value={textValue}
          label={"Título"} //optional
          />

        <Button onClick={handleSubmit}>Salvar</Button>
        <Button onClick={handleReset}>Cancelar</Button>
      </Paper>
          </FormGroup>
    </Container>
  );
}

export default Roadmap;