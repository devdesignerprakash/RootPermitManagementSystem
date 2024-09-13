import React from 'react'

const VehicleOwner = ({formData, handleChange}) => {
  return (
    <>
     <h3>Vehicle Owners</h3>
        <Form.Group controlId="ownerName">
          <Form.Label>Owner Name</Form.Label>
          <Form.Control
            type="text"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="ownerAddress">
          <Form.Label>Owner Address</Form.Label>
          <Form.Control
            type="text"
            name="ownerAddress"
            value={formData.ownerAddress}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="ownerContact">
          <Form.Label>Owner Contact</Form.Label>
          <Form.Control
            type="text"
            name="ownerContact"
            value={formData.ownerContact}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="vehicleManagementPerson">
          <Form.Label>Vehicle Management Person</Form.Label>
          <Form.Control
            type="text"
            name="vehicleManagementPerson"
            value={formData.vehicleManagementPerson}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="addressManagementPerson">
          <Form.Label>Address Management Person</Form.Label>
          <Form.Control
            type="text"
            name="addressManagementPerson"
            value={formData.addressManagementPerson}
            onChange={handleChange}
          />
        </Form.Group>

    </>
  )
}

export default VehicleOwner