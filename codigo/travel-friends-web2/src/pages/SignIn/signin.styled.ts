import styled from "styled-components";
import { Container, Form, Col, Button } from "react-bootstrap";

export const ContainerSC = styled(Container)`
  height: 100%;
  position: absolute;
`;

export const Title = styled.h1`
  color: white;
  font-size: 48;
  text-align: center;
  font-weight: 700;
`;

export const FormLabelSC = styled(Form.Label)`
  color: white;
`;

export const BoxForm = styled(Col)`
  background-color: #3186f4;
`;

export const ButtonSC = styled(Button)`
  background-color: #ffc60b;
`;
