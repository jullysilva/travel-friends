import { useState } from 'react';
import { Container, Row, Col, Card,Form, Figure, Button } from 'react-bootstrap';
import { Icon } from '../../components';
import { loginUser } from '../../services/api/Requests/login';
// import logo from '../../assets/icon-planet.svg';

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
    <Container fluid>
      <Row>
        {/* <Col sm={8}>
        <Icon name="planet" width="250" />
          <img src={logo} alt="Logo" />
          <Figure style={{textAlign: 'center'}}>
            <Figure.Image width="50%" alt="171x180" src={logo}/>
            <Figure.Caption>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
          </Figure>
        </Col> */}
        <Col sm={4} style={{backgroundColor: '#3186f4'}}>
          <Card className='p-5'>
              <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" value={values.email} onChange={(e) => {
                    values.email = e.target.value;
                    setValues({...values});
                  }} placeholder="Insira seu email" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" name="password" value={values.password} onChange={(e) => {
                    values.password = e.target.value;
                    setValues({...values});
                  }} placeholder="Insira a senha" required/>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Entrar
                </Button>
              </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;