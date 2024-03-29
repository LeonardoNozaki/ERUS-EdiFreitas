import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import './styles.css';
import ongLogo from '../../assets/ong_logo.jpg';
import { Redirect } from 'react-router-dom';

export default function Login() {
  const [validated, setValidated] = useState(false);
  const [toRedirect, setToRedirect] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      setToRedirect(true);
    }
    setValidated(true);

  };


  return (
    <>
    {toRedirect ? <Redirect to="/sobre"/> : null }
    <Container className="forms1">
      <Row className="justify-content-md-center">
        <Col md={4} className="forms">
          <Form  noValidate validated={validated} onSubmit={handleSubmit}>
            <Container>
              <Row className="justify-content-md-center">
                <img src={ongLogo} alt="First slide" width="100" height="100"/>
              </Row>
              <Row className="justify-content-md-center">
                <span className="titulo justify-content-md-center">Login do Administrador</span>
              </Row>
              <Row className="justify-content-md-center">
                <span className="desc justify-content-md-center">Parte reservada para o administrador do sistema.</span>
              </Row>
            </Container>
            <br/>
            <Form.Group md="4" controlId="validationCustom01">
              <Form.Label>Usuário</Form.Label>
              <Form.Control required type="text" placeholder="Nome de usuário"/>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom02">
              <Form.Label>Senha</Form.Label>
              <Form.Control required type="password" placeholder="Senha de usuário" />
            </Form.Group>
            <br/>
            <Row className="justify-content-md-center">
              <Button type="submit" className="botao">Entrar</Button>
            </Row>

          </Form>
        </Col>
      </Row>
    </Container>
</>
  );
}
