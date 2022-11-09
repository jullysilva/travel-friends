import { useEffect } from 'react';
import { Container, Col, Row, Figure, Nav, Form, Button, Navbar } from 'react-bootstrap';
import { getRoadmap } from '../../services/api/Requests/roadmap';
import LogoTipo from '../../assets/logo-web.png';
import User from '../../assets/user-icon.svg';

const Home = () => {

  useEffect(() => {
    const data = getRoadmap();
    console.log(data);
  }, []);

  return (
    <Container fluid>
      <Row className='h-100'>
        <Col sm={2} style={{backgroundColor: '#F5F5F5'}}>
          <Figure className='text-center'>
            <Figure.Image width="70%" alt="171x180" src={LogoTipo}/>
          </Figure>

          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Início</Nav.Link>
            <Nav.Link eventKey="link-1">Configuração</Nav.Link>
            <Nav.Link eventKey="link-2">Sair</Nav.Link>
          </Nav>
        </Col>

        <Col sm={10}>
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Pesquisar roteiro"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Pesquisar</Button>
              </Form>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Explorar</Nav.Link>
                <Nav.Link href="#pricing">Meus roteiros</Nav.Link>
              </Nav>
              <Nav className="me-5">
                <Button className='mr-5' variant="outline-warning">Criar</Button>
              </Nav>
              <Nav>
                <Nav.Link>Fulano</Nav.Link>
                <Nav.Link>
                  <img
                    src={User}
                    className="d-inline-block align-top"
                    alt="Logo usuário"
                  />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          </Navbar>
          <Col sm={12}>

          </Col>
          <Col sm={12}></Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
