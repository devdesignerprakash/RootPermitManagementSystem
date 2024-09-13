import React from 'react'

const VehicleType = ({formData, handleChange}) => {
  return (
   <>
   <h3>Vehicle Types</h3>
        <Form.Group controlId="vehicleTypeName">
          <Form.Label>Vehicle Type Name</Form.Label>
          <Form.Control
            type="text"
            name="vehicleTypeName"
            value={formData.vehicleTypeName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="vehicleTypeRemarks">
          <Form.Label>Remarks</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="vehicleTypeRemarks"
            value={formData.vehicleTypeRemarks}
            onChange={handleChange}
          />
        </Form.Group>

   </>
  )
}

export default VehicleType