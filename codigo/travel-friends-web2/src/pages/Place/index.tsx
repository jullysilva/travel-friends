import React, { useState, useEffect } from 'react';
import { Navigation } from '../../components';
import { Container, Card, Row,Col, Form, Button } from 'react-bootstrap';
import { Local } from '../../@types/models.interface';
import { SearchCEP } from '../../utils/generalUtils';
import InputTime from '../../components/InputTime/InputTime';

const Place = () => {
    const [values, setValues] = useState<Local>({} as Local);
    const [address, setAddress] = useState({
        cep: null,
        logradouro: null,
        complemento: null,
        bairro: null,
        localidade: null,
        uf: null,
        ibge: null,
        gia: null,
        ddd: null,
        siafi: null
    });
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        let logradouro = `${address.logradouro}, ${address.numero}, ${address.bairro}, ${address.localidade}-${address.uf}`;
        values.address = logradouro;
        setValues({...values});
    }, [address, values]);
  
    const onSubmit = (e:any) => {
        e.preventDefault();
    }

    const handleAddress = async(value: any) => {
        const result = await SearchCEP(value);
        console.log(result);
        setAddress(result?.data);
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
            <Form noValidate validated={validated} onSubmit={(e) => onSubmit(e)} className='pe-5 ps-5'>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Nome do local</Form.Label>
                        <Form.Control type="text" value={values.name} onChange={(e) => {
                            values.name = e.target.value;
                            setValues({...values});
                        }} placeholder="Insira o nome do local" required/>
                    </Form.Group>   
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>CEP</Form.Label>
                        <Form.Control type='tel' pattern="[0-9]{5}-[0-9]{2}" maxLength={8} value={values.cep} onChange={(e) => {
                            values.cep = e.target.value;
                            setValues({...values});
                        }} onBlur={(e) => handleAddress(e.target.value)} placeholder='Insira o CEP' required/>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control value={values.address} onChange={(e) => {
                            values.address = e.target.value;
                            setValues({...values});
                        }} type="text" placeholder="Insira o logradouro"/>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Número</Form.Label>
                        <Form.Control value={address.numero} onChange={(e) => {
                            address.numero = e.target.value;
                            setAddress({...address});
                        }} type='text' placeholder="1234" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Hora de abertura</Form.Label>
                        <InputTime
                            name="openTime"
                            value={values.openTime}
                            initTime='00:00'
                            mountFocus={false}
                            onTimeChange={onTimeChangeHandler}
                            onFocusHandler={onFocusHandler}
                            onBlurHandler={onBlurHandler}
                        />
                    </Form.Group>
                    
                    <Form.Group as={Col}>
                        <Form.Label>Hora de fechamento</Form.Label>
                        <InputTime
                            name="closeTime"
                            value={values.closeTime}
                            initTime='00:00'
                            mountFocus={false}
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

export default Place;
