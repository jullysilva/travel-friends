import { useEffect, useState } from 'react';
import { Container, Col, Row, Figure, Nav, Form, Button, Navbar } from 'react-bootstrap';
import { getAllRoadmap } from '../../services/api/Requests/roadmap';
import { RoadMap } from "../../@types/models.interface";
import LogoTipo from '../../assets/logo-web.png';
import User from '../../assets/user-icon.svg';
import { CardBox } from '../../components';

const Home = () => {

  const [roadmapList, setRoadmapList] = useState();

  async function loadRoadmap() {
    const resp = await getAllRoadmap();
    setRoadmapList(resp?.data);
  }

  useEffect(() => {
    loadRoadmap();
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
            <CardBox data={roadmapList} />
          </Col>
          <Col sm={12}></Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
