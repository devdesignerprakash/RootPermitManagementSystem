import React from 'react'

const VehicleEmployee = ({formData,handleChange}) => {
  return (
    <>
     <h3>Employee Details</h3>
        <Form.Group controlId="employeeAddress">
          <Form.Label>Employee Address</Form.Label>
          <Form.Control
            type="text"
            name="employeeAddress"
            value={formData.employeeAddress}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="employeeContact">
          <Form.Label>Employee Contact</Form.Label>
          <Form.Control
            type="text"
            name="employeeContact"
            value={formData.employeeContact}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="employeeLicenceNumber">
          <Form.Label>Employee Licence Number</Form.Label>
          <Form.Control
            type="text"
            name="employeeLicenceNumber"
            value={formData.employeeLicenceNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="employeeLicenceIssuer">
          <Form.Label>Employee Licence Issuer</Form.Label>
          <Form.Control
            type="text"
            name="employeeLicenceIssuer"
            value={formData.employeeLicenceIssuer}
            onChange={handleChange}
          />
        </Form.Group>
    </>
  )
}

export default VehicleEmployee