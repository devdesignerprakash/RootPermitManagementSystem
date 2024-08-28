import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Container, Row, Col, Button, Table, Form, InputGroup } from 'react-bootstrap';
// import vehicles from './routPermit.json'; // Import your JSON data
import { useNavigate } from 'react-router-dom';


const RoutePermit = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [vehicles, setVehicles]=useState([])
  useEffect(()=>{
    const fetchData= async()=>{
      try {
         const response = await axios.get('http://localhost:5000/getAllVehicles');
        setVehicles(response.data)
      }
      catch(error){
        console.log(error)
      }
    }
    fetchData()
  },[])
  console.log(vehicles)
  const navigate=useNavigate()
  const handleRenew=(ijajatNumber)=>{
    navigate(`/renewPermit/${encodeURIComponent(ijajatNumber)}`)
  }
  // Handler for search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtered vehicles based on search term
  const filteredVehicles =vehicles.filter(vehicles =>
    vehicles['vehicleNumber'].toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicles['ownerName'].toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicles['routeDetail'].toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Container>
      <h1 className="my-4">बाटो इजाजत पत्र </h1>
      
      {/* Search Input */}
      <Form>
        <Row className="mb-4">
          <Col md={8}>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search by Vehicle Number, Owner Name, or Route Detail"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <Button variant="primary" className="ms-2">Search</Button>
            </InputGroup>
          </Col>
        </Row>
      </Form>
      
      {/* Add New Button */}
      <Row className="mb-4">
        <Col className="text-end">
          <Button variant="success">Add New</Button>
        </Col>
      </Row>
    
      {/* Vehicle Table */}
      <div style={{ maxHeight: '400px', overflowY: 'auto', overflowX: 'auto' }}>
      <Table striped bordered hover className="mb-0">
        <thead className="table-header-sticky">
          <tr>
            <th>Vehicle Number</th>
            <th>Engine No</th>
            <th>Chassis No</th>
            <th>Owner Name</th>
            <th>yatayat Prali name</th>
            <th>Model</th>
            <th>Vehicle Type</th>
            <th>Route Detail</th>
            <th>Route Permit Valid Date</th>
            <th>Insurance Valid Date</th>
            <th>Jachpass Valid Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredVehicles.map((vehicle, index) => (
            <tr key={index}>
              <td>{vehicle['vehicleNumber']}</td>
              <td>{vehicle['engineNo']}</td>
              <td>{vehicle['chasisNo']}</td>
              <td>{vehicle['ownerName']}</td>
              <td>{vehicle['yatayatPraliName']}</td>
              <td>{vehicle['Model']}</td>
              <td>{vehicle['vehicle Type']}</td>
              <td>{vehicle['routeDetail']}</td>
              <td>{vehicle['routePermitValid Date']}</td>
              <td>{vehicle['insuranceValidDate']}</td>
              <td>{vehicle['jachpassValideDate']}</td>
              <td>
                {/* Action Buttons */}
                <Button variant="success" className="me-2" onClick={(e)=>{handleRenew(vehicle['ijajat No'])}}>Renew</Button>
                <Button variant="warning" className="me-2">Change</Button>
                <Button variant="info" className="me-2">Lagat Katta</Button>
                <Button variant="secondary">bato kharej</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </Container>
  )
}

export default RoutePermit




