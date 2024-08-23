import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  return (
    <Container fluid className="login-container vh-200 d-flex align-items-center justify-content-center">
        <Col md={6} className="p-5">
          <h2 className="mb-4 text-center"> लग-ईन</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>इमेल ठेगाना</Form.Label>
              <Form.Control type="email" placeholder="इमेल ठेगाना" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>पासवर्ड</Form.Label>
              <Form.Control type="password" placeholder="पासवर्ड" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className="mt-3">
              <Form.Check type="checkbox" label="सम्झनुहोस्" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4 w-100">
            लग-ईन
            </Button>

            <div className="d-flex justify-content-between mt-3">
              <a href="#" className="text-primary">
              पासवर्ड बिर्सनुभयो?</a>
              <a href="#" className="text-primary">एकाउण्ट छैन?</a>
            </div>
          </Form>
        </Col>
    </Container>
  );
};

export default Login;
