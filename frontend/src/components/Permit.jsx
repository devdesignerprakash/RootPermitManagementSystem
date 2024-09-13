import React from 'react'

const Permit = ({formData,handleChange}) => {
  return (
    <>
    <h3>Permits</h3>
        <Form.Group controlId="permitNumber">
          <Form.Label>Permit Number</Form.Label>
          <Form.Control
            type="text"
            name="permitNumber"
            value={formData.permitNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="permitIssueDate">
          <Form.Label>Permit Issue Date</Form.Label>
          <Form.Control
            type="date"
            name="permitIssueDate"
            value={formData.permitIssueDate}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="attachedDocuments">
          <Form.Label>Attached Documents</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="attachedDocuments"
            value={formData.attachedDocuments}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="vehicleId">
          <Form.Label>Vehicle ID</Form.Label>
          <Form.Control
            type="number"
            name="vehicleId"
            value={formData.vehicleId}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="permitOthers">
          <Form.Label>Others</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="permitOthers"
            value={formData.permitOthers}
            onChange={handleChange}
          />
        </Form.Group>
    </>
  )
}

export default Permit