import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Registration = () => {
  return (
    <Container fluid className="login-container vh-200 d-flex align-items-center justify-content-center">
        <Col md={6} className="p-5">
          <h2 className="mb-4 text-center"> साइन-अप</h2>
          <Form>
          <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>पुरा नाम</Form.Label>
              <Form.Control type="text" placeholder="पुरा नाम" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>इमेल ठेगाना</Form.Label>
              <Form.Control type="email" placeholder="इमेल ठेगाना" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>पासवर्ड</Form.Label>
              <Form.Control type="password" placeholder="पासवर्ड" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>फोन नंबर</Form.Label>
              <Form.Control type="password" placeholder="फोन नंबर" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4 w-100">
            साइन अप
            </Button>

          </Form>
        </Col>
    </Container>
  );
};

export default Registration;
