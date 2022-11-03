import { useState } from 'react';
import { Navigate, Link } from "react-router-dom";
import { Container, Row, Col, Card,Form, Figure, Button } from 'react-bootstrap';
import { ContainerSC, FormLabelSC, BoxForm, ButtonSC, Title } from './signin.styled';
// import { Icon } from '../../components';
import { loginUser } from '../../services/api/Requests/login';
import planet from '../../assets/icon-planet.svg';
import logo from '../../assets/logo-app.png';

const SignIn = () => {
  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    const data = await loginUser(values);
    console.log(data);
    setValidated(true);
  };

  return (
    <ContainerSC fluid 
    // className="d-flex align-items-center justify-content-center"
    >
      <Row style={{height: '100%'}}>
        <Col sm={7} className="align-items-center" style={{alignSelf: 'center'}}>
          <Figure style={{textAlign: 'center'}}>
            {/* <Icon name="planet" width="250" /> */}
            <Figure.Image width="70%" alt="171x180" src={planet}/>
            <Figure.Caption style={{padding: '0 15%', textAlign: 'justify'}} className="mt-3">
              Conectando pessoas a lugares e experiências incríveis! Com a Travel Friends você descobre os melhores rolês próximos a você e pode participar de um grupo ou criar o seu próprio. O tema você escolhe... seja balada, trilha, família...
            </Figure.Caption>
          </Figure>
        </Col>
        <BoxForm sm={5}>
            <Container style={{height: '100%', display:'inline'}}>
              <Col style={{textAlign: 'center'}}>
                <img src={logo} width="142" alt="Logo" />
                <Title>Login</Title>
              </Col>
              <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)} className="m-5">
                <Form.Group className="mb-3">
                  <FormLabelSC>Email</FormLabelSC>
                  <Form.Control type="email" name="email" value={values.email} onChange={(e) => {
                    values.email = e.target.value;
                    setValues({...values});
                  }} placeholder="Insira seu email" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <FormLabelSC>Senha</FormLabelSC>
                  <Form.Control type="password" name="password" value={values.password} onChange={(e) => {
                    values.password = e.target.value;
                    setValues({...values});
                  }} placeholder="Insira a senha" required/>
                </Form.Group>
                <ButtonSC type="submit" className="w-100">
                  Entrar
                </ButtonSC>
                <Col className="mt-3 d-grid" style={{textAlign: 'center'}}>
                  <FormLabelSC>
                   <Link to='/reset' style={{color: 'white'}}>Esqueci a senha</Link>
                  </FormLabelSC>
                  <FormLabelSC>
                    <Link to='/cadastrar' style={{color: 'white'}}>Registrar</Link>
                  </FormLabelSC>
                </Col>
              </Form>
              </Container>
        </BoxForm>
      </Row>
    </ContainerSC>
  );
}

export default SignIn;