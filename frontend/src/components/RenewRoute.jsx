import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const RenewRoute = () => {
    const [formData, setFormData] = useState({
        vehicleNumber: '',
        ijajatNo: '',
        chasisNo: '',
        model: '',
        ownerName: '',
        engineNo: '',
        yatayatPraliName: '',
        vehicleType: '',
        routePermitValidDate: '',
        routeDetail: '',
        insuranceValidDate: '',
        jachpassValidDate: ''
      });
    
      // Handler for form input changes
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      // Handler for form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Add your form submission logic here
      };
  return (
    <Container>
    <h1 className="my-4">Navikaran Faram</h1>
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="vehicleNumber">
            <Form.Label>Vehicle Number</Form.Label>
            <Form.Control
              type="text"
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={handleChange}
              placeholder="Enter Vehicle Number"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="ijajatNo">
            <Form.Label>Ijajat No</Form.Label>
            <Form.Control
              type="text"
              name="ijajatNo"
              value={formData.ijajatNo}
              onChange={handleChange}
              placeholder="Enter Ijajat No"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="chasisNo">
            <Form.Label>Chasis No</Form.Label>
            <Form.Control
              type="text"
              name="chasisNo"
              value={formData.chasisNo}
              onChange={handleChange}
              placeholder="Enter Chasis No"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="model">
            <Form.Label>Model</Form.Label>
            <Form.Control
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              placeholder="Enter Model"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="ownerName">
            <Form.Label>Owner Name</Form.Label>
            <Form.Control
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder="Enter Owner Name"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="engineNo">
            <Form.Label>Engine No</Form.Label>
            <Form.Control
              type="text"
              name="engineNo"
              value={formData.engineNo}
              onChange={handleChange}
              placeholder="Enter Engine No"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="yatayatPraliName">
            <Form.Label>Yatayat Prali Name</Form.Label>
            <Form.Control
              type="text"
              name="yatayatPraliName"
              value={formData.yatayatPraliName}
              onChange={handleChange}
              placeholder="Enter Yatayat Prali Name"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="vehicleType">
            <Form.Label>Vehicle Type</Form.Label>
            <Form.Control
              type="text"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              placeholder="Enter Vehicle Type"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="routePermitValidDate">
            <Form.Label>Route Permit Valid Date</Form.Label>
            <Form.Control
              type="date"
              name="routePermitValidDate"
              value={formData.routePermitValidDate}
              onChange={handleChange}
              placeholder="Enter Route Permit Valid Date"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="routeDetail">
            <Form.Label>Route Detail</Form.Label>
            <Form.Control
              type="text"
              name="routeDetail"
              value={formData.routeDetail}
              onChange={handleChange}
              placeholder="Enter Route Detail"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="insuranceValidDate">
            <Form.Label>Insurance Valid Date</Form.Label>
            <Form.Control
              type="date"
              name="insuranceValidDate"
              value={formData.insuranceValidDate}
              onChange={handleChange}
              placeholder="Enter Insurance Valid Date"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="jachpassValidDate">
            <Form.Label>Jachpass Valid Date</Form.Label>
            <Form.Control
              type="date"
              name="jachpassValidDate"
              value={formData.jachpassValidDate}
              onChange={handleChange}
              placeholder="Enter Jachpass Valid Date"
            />
          </Form.Group>
        </Col>
      </Row>
      {/* Submit Button */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </Container>
  )
}

export default RenewRoute



