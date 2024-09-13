import React from 'react'

const YatayatSewa = ({formData,handleChange}) => {
  return (
   <>
   <h3>Yatayat Sewa</h3>
        <Form.Group controlId="yatayatSewaName">
          <Form.Label>Yatayat Sewa Name</Form.Label>
          <Form.Control
            type="text"
            name="yatayatSewaName"
            value={formData.yatayatSewaName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="registeredDate">
          <Form.Label>Registered Date</Form.Label>
          <Form.Control
            type="date"
            name="registeredDate"
            value={formData.registeredDate}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="renewValidDate">
          <Form.Label>Renew Valid Date</Form.Label>
          <Form.Control
            type="date"
            name="renewValidDate"
            value={formData.renewValidDate}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="registeredAt">
          <Form.Label>Registered At</Form.Label>
          <Form.Control
            type="text"
            name="registeredAt"
            value={formData.registeredAt}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="contactNo">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="text"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />
        </Form.Group>
   </>
  )
}

export default YatayatSewa