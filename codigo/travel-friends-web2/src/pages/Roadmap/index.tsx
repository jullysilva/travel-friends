import React, { useState } from 'react';
import { Navigation } from '../../components';
import { Container, Card, Row,Col, Form, Button } from 'react-bootstrap';
import { Local } from '../../@types/models.interface';
import { SearchCEP } from '../../utils/generalUtils';
import InputTime from '../../components/InputTime/InputTime';

const Roadmap = () => {
    const [values, setValues] = useState<Local>({} as Local);
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
                        <Form.Label>Nome do local</Form.Label>
                        <Form.Control type="text" value={values.name} placeholder="Insira o nome do local" required/>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Tipo do estabelecimento</Form.Label>
                        <Form.Select defaultValue="Escolha..." required>
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>    
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>CEP</Form.Label>
                        <Form.Control maxLength={8} value={values.cep} placeholder='Insira o CEP' required/>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control value={values.address} type="text" placeholder="Insira o logradouro"/>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Número</Form.Label>
                        <Form.Control value='nada' type='text' placeholder="1234" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Hora de abertura</Form.Label>
                        <InputTime
                            name="time"
                            value={values.openTime}
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
                            value={values.closeTime}
                            initTime='00:00'
                            mountFocus={true}
                            onTimeChange={onTimeChangeHandler}
                            onFocusHandler={onFocusHandler}
                            onBlurHandler={onBlurHandler}
                        />
                    </Form.Group>
                </Row>
                <Button variant="success" type="submit">
                    Cadastrar Localidade
                </Button>
            </Form>
        </Container>
      </Navigation>
    );
}

export default Roadmap;
