import { useState } from 'react';
import { Container, Row, Col,Form, Figure, Alert, Modal } from 'react-bootstrap';
import { ContainerSC, BoxForm, Title } from './signUp.styled';
import { registerUser } from '../../services/api/Requests/login';
import { Button } from '../../components';
import planet from '../../assets/icons/icon-planet.svg';
import logo from '../../assets/icons/logo-app.png';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../utils';
import { UserRegister } from '../../@types/models.interface';
import React from 'react';

const SignUp = () => {
  const [messageSuccess, setMessageSuccess] = useState(null);
  const [message, setMessage] = useState(null);
  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState<UserRegister>({} as UserRegister);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    const { data, status } = await registerUser(values);
    if(status === 201){
      setMessageSuccess(data.message);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
    else{
      setMessage(data.error);
    };
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
              <Col className='text-center mb-3'>
                <img src={logo} width="142" alt="Logo" />
                <Title>Registrar-se</Title>
              </Col>
              <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)} className="ms-5 me-5">
              {message && <Alert variant='danger'>{message}</Alert>}
              {messageSuccess && <Alert variant='success'>{messageSuccess} Você será redirecionado.</Alert>}
                <Form.Group className="mb-3">
                  <Form.Label className='text-white'>Nome</Form.Label>
                  <Form.Control type="text" name="name" value={values.name} onChange={(e) => {
                    values.name = e.target.value;
                    setValues({...values});
                  }} placeholder="Insira seu nome" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className='text-white'>Email</Form.Label>
                  <Form.Control type="email" name="email" value={values.email} onChange={(e) => {
                    values.email = e.target.value;
                    setValues({...values});
                  }} placeholder="Insira seu email" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className='text-white'>CPF</Form.Label>
                  <Form.Control type="text" name="cpf" value={values.cpf} onChange={(e) => {
                    values.cpf = e.target.value;
                    setValues({...values});
                  }} placeholder="xxx.xxx.xxx-xx" maxLength={11} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className='text-white'>Senha</Form.Label>
                  <Form.Control type="password" name="password" value={values.password} onChange={(e) => {
                    values.password = e.target.value;
                    setValues({...values});
                  }} placeholder="Insira uma senha" required/>
                </Form.Group>
                <Form.Group className="mb-3 d-flex" style={{gap: 5}}>
                <Form.Check type="checkbox" />
                <p className='text-white'>Ao criar uma conta, tem de concordar com os <a href='#' onClick={()=> setShowModal(true)}>Termos e Condições</a>.</p>
                </Form.Group>
                <Button
                  type='submit'
                  bg={Theme.colors.yellow}
                  color="white"
                  children = "Cadastrar"/>
              </Form>
              </Container>
        </BoxForm>
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Termos e Condições</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height:"400px", overflowY:"auto"}}>
          <h6>Descrição do Serviço</h6>
          <p>A Travel Friends é uma plataforma online que conecta pessoas a lugares e experiências incríveis. Nosso objetivo é ajudar você a descobrir os melhores rolês próximos a você e possibilitar sua participação em grupos existentes ou criação de grupos próprios. Oferecemos diversas opções temáticas, como baladas, trilhas, eventos familiares, entre outros.</p>

          <h6>Elegibilidade</h6>
          <p>Para utilizar nossos serviços, você deve ter pelo menos 18 anos de idade ou ser considerado legalmente adulto em sua jurisdição. Ao se cadastrar, você declara e garante que possui a capacidade legal para celebrar um contrato vinculativo.</p>

          <h6>Cadastro e Privacidade</h6>
          <p>Ao se cadastrar no Travel Friends, você concorda em fornecer informações precisas e atualizadas. Você também concorda em proteger suas credenciais de login e manter sua conta segura. Respeitamos sua privacidade e protegemos seus dados pessoais de acordo com nossa Política de Privacidade.</p>

          <h6>Responsabilidades do Usuário</h6>
          <p>Você é responsável por suas atividades no Travel Friends. Ao participar de grupos ou criar o seu próprio, você concorda em agir de maneira responsável, respeitando as leis, regulamentos e direitos dos outros usuários. Não toleramos comportamentos ofensivos, discriminatórios, ilegais ou que violem os direitos de terceiros.</p>

          <h6>Propriedade Intelectual</h6>
          <p>Todo o conteúdo apresentado no Travel Friends, incluindo textos, imagens, logotipos e marcas registradas, são protegidos por direitos autorais e propriedade intelectual. Você não pode copiar, modificar, distribuir ou utilizar o conteúdo sem a autorização prévia por escrito da Travel Friends.</p>

          <h6>Limitação de Responsabilidade</h6>
          <p>A Travel Friends não assume responsabilidade por quaisquer danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso do site, inclusão em grupos ou participação em atividades relacionadas. Os usuários assumem todos os riscos associados às suas interações com outros membros da comunidade Travel Friends.</p>

          <h6>Modificações e Encerramento</h6>
          <p>A Travel Friends reserva-se o direito de modificar ou encerrar o site e seus serviços a qualquer momento, por qualquer motivo, sem aviso prévio. Você concorda que não seremos responsáveis perante você ou terceiros por qualquer modificação, suspensão ou encerramento do site.</p>

          <h6>Jurisdição e Lei Aplicável</h6>
          <p>Estes termos e condições serão regidos pelas leis do país em que a Travel Friends está registrada. Qualquer disputa decorrente destes termos será submetida à jurisdição exclusiva dos tribunais competentes nessa localidade.</p>

          <p>Ao usar o Travel Friends, você concorda em cumprir estes termos e condições. Se você não concorda com algum aspecto desses termos, não utilize nosso site ou serviços. Em caso de dúvidas ou preocupações, entre em contato conosco através dos canais de suporte fornecidos.</p>

          <p>Agradecemos por escolher a Travel Friends para conectar pessoas a lugares e experiências incríveis!</p>
        </Modal.Body>
      </Modal>
    </ContainerSC>
  );
}

export default SignUp;
