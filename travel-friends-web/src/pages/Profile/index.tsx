import { userHook } from 'src/context/userData';
import {  FallbackWrapper, Navigation } from '../../components';
import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import CardBox from 'src/components/Card/Card';
import { Form } from 'react-bootstrap';
import User from '../../assets/icons/user-icon.svg';

const Profile = () => {

  const { userData } = userHook();
  const [name, setName] = useState(userData.name)
  const [cpf, setCpf] = useState(userData.cpf)
  const [email, setEmail] = useState(userData.email)
  
  return (
    <Navigation>
        <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
        <div style={{border:'3px solid lightgrey', borderRadius:'50%', width:'200px', height:'200px', alignSelf:'center'}}>
          <img src={User} style={{height:'200px'}} alt="Logo usuário" />
        </div>
        <Form.Group controlId="name">
          <Form.Label>Nome:</Form.Label>
          <Form.Control value={name} disabled/>
        </Form.Group>
        <Form.Group controlId="cpf">
          <Form.Label>CPF:</Form.Label>
          <Form.Control value={cpf} disabled/>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>E-mail:</Form.Label>
          <Form.Control value={email} disabled/>
        </Form.Group>
      </div>
    </Navigation>
  );


}

export default Profile;
