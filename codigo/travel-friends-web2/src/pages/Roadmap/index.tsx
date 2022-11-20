import React, { useState } from 'react';
import { Navigation } from '../../components';
import { Container, Card, Row,Col, Form, Button } from 'react-bootstrap';
import { Local, RoadMap } from '../../@types/models.interface';
import { SearchCEP } from '../../utils/generalUtils';
import InputTime from '../../components/InputTime/InputTime';

const Roadmap = () => {
    const [values, setValues] = useState<RoadMap>({} as RoadMap);
    const [validated, setValidated] = useState(false);

  
    const onSubmit = (e:any) => {
        e.preventDefault();
    }

    const onFocusHandler = (e: any) => {
        console.log("hello there you entered :  my name is ", e.target.name);
    }
 
    const onBlurHandler = (e: any) => {
        console.log("you left ");
    }
 
    const onTimeChangeHandler = (val: any) => {
        if (val.length === 5) {
            // do something with this value
        }
    }

    return (
      <Navigation className="d-flex">
        <Container className='p-5 justify-content-center align-self-center'>
            <Form noValidate validated={validated} onSubmit={(e) => onSubmit(e)}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Nome do Passeio</Form.Label>
                        <Form.Control type="text" value={values.title} onChange={(e) => {values.title = e.target.value;
                            setValues({...values});}} placeholder="Insira o nome do passeio" required/>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Tipo do estabelecimento</Form.Label>
                        <Form.Select defaultValue="Escolha..." value={values.type} onChange={(e) => {
                            values.type = e.target.value;
                            setValues({...values});}} required>
                            <option value="">Escolha...</option>
                            <option value='1'>Restaurante</option>
                            <option value='2'>Loja</option>
                            <option value='3'>Museu</option>
                            <option value='4'>Igreja</option>
                            <option value='5'>Parque</option>
                            <option value='6'>Ar Livre</option>
                            <option value='7'>Educação</option>
                            <option value='8'>Shopping</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Check 
                            type="switch"
                            className='text-success'
                            id="custom-switch"
                            label="Gratuito"
                        />
                    </Form.Group> 
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Quantidade de participantes</Form.Label>
                        <Form.Control type='number' value={values.person} placeholder='Exemplo: 10' required/>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control as="textarea" rows={3} value={values.description}  type="text" placeholder="Insira o logradouro"/>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Preço</Form.Label>
                        <Form.Control value={values.price} type='text' placeholder="R$ 00,00" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Hora de abertura</Form.Label>
                        <InputTime
                            name="time"
                            value={values.start}
                            initTime='00:00'
                            mountFocus={true}
                            onTimeChange={onTimeChangeHandler}
                            onFocusHandler={onFocusHandler}
                            onBlurHandler={onBlurHandler}
                        />
                    </Form.Group>
                    
                    <Form.Group as={Col}>
                        <Form.Label>Hora de fechamento</Form.Label>
                        <InputTime
                            name="time"
                            value={values.end}
                            initTime='00:00'
                            mountFocus={true}
                            onTimeChange={onTimeChangeHandler}
                            onFocusHandler={onFocusHandler}
                            onBlurHandler={onBlurHandler}
                        />
                    </Form.Group>
                </Row>
                <Row>
                <Form.Group as={Col}>
                        <Form.Label>Hora de abertura</Form.Label>
                        <InputTime
                            name="time"
                            value={values.start}
                            initTime='00:00'
                            mountFocus={true}
                            onTimeChange={onTimeChangeHandler}
                            onFocusHandler={onFocusHandler}
                            onBlurHandler={onBlurHandler}
                        />
                    </Form.Group>
                    
                    <Form.Group as={Col}>
                        <Form.Label>Hora de fechamento</Form.Label>
                        <InputTime
                            name="time"
                            value={values.end}
                            initTime='00:00'
                            mountFocus={true}
                            onTimeChange={onTimeChangeHandler}
                            onFocusHandler={onFocusHandler}
                            onBlurHandler={onBlurHandler}
                        />
                    </Form.Group>
                </Row>
                <Button variant="success" type="submit">
                    Cadastrar Passeio
                </Button>
            </Form>
        </Container>
      </Navigation>
    );
}

export default Roadmap;
