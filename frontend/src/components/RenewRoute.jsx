import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios'


const RenewRoute = () => {
  const { ijajatNumber } = useParams();
  const [selectedItem, setSelectedItem] = useState({});
  useEffect(()=>{
    const fetchData= async()=>{
      try {
         const response = await axios.get(`http://localhost:5000/renew/${ijajatNumber}`);
         console.log(response)
        setSelectedItem(response.data)
      }
      catch(error){
        console.log(error)
      }
    }
    fetchData()
  },[ijajatNumber])

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedItem(prev => ({
      ...prev,
      [name]: value
    }));
  };                   

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', selectedItem);
    // Add your form submission logic here
  };

  return (
    <Container>
      <h1 className="my-4">Navikaran Form</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="vehicleNumber">
              <Form.Label>Vehicle Number</Form.Label>
              <Form.Control
                type="text"
                name="Vehicle Number"
                value={selectedItem["Vehicle Number"] || ''}
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
                name="ijajat No"
                value={selectedItem["ijajat No"] || ''}
                onChange={handleChange}
                placeholder="Enter Ijajat No"
              />
            </Form.Group>
          </Col>
        </Row>
        {/* Repeat similar structure for other fields */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="chasisNo">
              <Form.Label>Chasis No</Form.Label>
              <Form.Control
                type="text"
                name="Chasis No"
                value={selectedItem['Chasis No'] || ''}
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
                name="Model"
                value={selectedItem.Model || ''}
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
                name="Owner Name"
                value={selectedItem["Owner Name"] || ''}
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
                name="Engine No"
                value={selectedItem["Engine No"] || ''}
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
                name="Yatayat Prali Name"
                value={selectedItem["yatayat Prali name"] || ''}
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
                name="Vehicle Type"
                value={selectedItem["vehicle Type"] || ''}
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
                name="Route Permit Valid Date"
                value={selectedItem["Route Permit Valid Date"] || ''}
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
                name="Route Detail"
                value={selectedItem["Route Detail"] || ''}
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
                name="Insurance Valid Date"
                value={selectedItem["Insurance Valid Date"] || ''}
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
                name="Jachpass Valid Date"
                value={selectedItem["Jachpass Valide Date"] || ''}
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
  );
};

export default RenewRoute;
