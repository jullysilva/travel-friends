import { useState } from 'react';
import { Container, Row, Col,Form, Figure } from 'react-bootstrap';
import { ContainerSC, BoxForm, Title } from './signUp.styled';
import { registerUser } from '../../services/api/Requests/login';
import { Button } from '../../components';
import planet from '../../assets/icon-planet.svg';
import logo from '../../assets/logo-app.png';
import { Theme } from '../../utils';

const SignUp = () => {
  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState({
    email: '',
    telephone: '',
    password: ''
  });

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    const data = await registerUser(values);
    console.log(data);
    setValidated(true);
  };

  return (
    <ContainerSC fluid>
      <Row className='h-100'>
        <Col sm={7} className="align-items-center align-self-center">
          <Figure className='text-center'>
            <Figure.Image width="70%" alt="171x180" src={planet}/>
            <Figure.Caption style={{padding: '0 15%'}} className="mt-3 text-justify">
              Conectando pessoas a lugares e experiências incríveis! Com a Travel Friends você descobre os melhores rolês próximos a você e pode participar de um grupo ou criar o seu próprio. O tema você escolhe... seja balada, trilha, família...
            </Figure.Caption>
          </Figure>
        </Col>
        <BoxForm sm={5}>
            <Container className='h-100 d-inline'>
              <Col className='text-center'>
                <img src={logo} width="142" alt="Logo" />
                <Title>Registrar-se</Title>
              </Col>
              <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)} className="m-5">
                <Form.Group className="mb-3">
                  <Form.Label className='text-white'>Email</Form.Label>
                  <Form.Control type="email" name="email" value={values.email} onChange={(e) => {
                    values.email = e.target.value;
                    setValues({...values});
                  }} placeholder="Insira seu email" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className='text-white'>Celular</Form.Label>
                  <Form.Control type="text" maxLength={11} name="telephone" value={values.telephone} onChange={(e) => {
                    values.telephone = e.target.value;
                    setValues({...values})
                    }} placeholder="(xx) x xxx-xxxx" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className='text-white'>Senha</Form.Label>
                  <Form.Control type="password" name="password" value={values.password} onChange={(e) => {
                    values.password = e.target.value;
                    setValues({...values});
                  }} placeholder="Insira uma senha" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Check type="checkbox" label={`Ao criar uma conta, tem de concordar com os + ${<a href='#' target="_blank">Termos e Condições</a>}`} />
                  <Form.Control type="password" name="password" value={values.password} onChange={(e) => {
                    values.password = e.target.value;
                    setValues({...values});
                  }} placeholder="Insira uma senha" required/>
                </Form.Group>
                <Button
                  type='submit'
                  bg={Theme.colors.yellow}
                  color="white"
                  children = "Salvar"/>
              </Form>
              </Container>
        </BoxForm>
      </Row>
    </ContainerSC>
  );
}

export default SignUp;