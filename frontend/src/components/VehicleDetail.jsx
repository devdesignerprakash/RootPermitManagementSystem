import React from 'react'

const VehicleDetail = ({formData,handleChange}) => {
  return (
    <>
     <h3>Vehicles</h3>
        <Form.Group controlId="vehicleNumber">
          <Form.Label>Vehicle Number</Form.Label>
          <Form.Control
            type="text"
            name="vehicleNumber"
            value={formData.vehicleNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="registeredDateVehicle">
          <Form.Label>Registered Date</Form.Label>
          <Form.Control
            type="date"
            name="registeredDateVehicle"
            value={formData.registeredDateVehicle}
            onChange={handleChange}
            required
          />
        </Form.Group>
  
        <Form.Group controlId="engineNumber">
          <Form.Label>Engine Number</Form.Label>
          <Form.Control
            type="text"
            name="engineNumber"
            value={formData.engineNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="chassisNumber">
          <Form.Label>Chassis Number</Form.Label>
          <Form.Control
            type="text"
            name="chassisNumber"
            value={formData.chassisNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="model">
          <Form.Label>Model</Form.Label>
          <Form.Control
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="manufacturer">
          <Form.Label>Manufacturer</Form.Label>
          <Form.Control
            type="text"
            name="manufacturer"
            value={formData.manufacturer}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="manufacturedYear">
          <Form.Label>Manufactured Year</Form.Label>
          <Form.Control
            type="number"
            name="manufacturedYear"
            value={formData.manufacturedYear}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="vehicleWeight">
          <Form.Label>Vehicle Weight</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            name="vehicleWeight"
            value={formData.vehicleWeight}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="weightCapacity">
          <Form.Label>Weight Capacity</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            name="weightCapacity"
            value={formData.weightCapacity}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="seatCapacity">
          <Form.Label>Seat Capacity</Form.Label>
          <Form.Control
            type="number"
            name="seatCapacity"
            value={formData.seatCapacity}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="ticketCounterAddress">
          <Form.Label>Ticket Counter Address</Form.Label>
          <Form.Control
            type="text"
            name="ticketCounterAddress"
            value={formData.ticketCounterAddress}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="parkingAddress">
          <Form.Label>Parking Address</Form.Label>
          <Form.Control
            type="text"
            name="parkingAddress"
            value={formData.parkingAddress}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="remarks">
          <Form.Label>Remarks</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="driver">
          <Form.Label>Driver</Form.Label>
          <Form.Control
            type="number"
            name="driver"
            value={formData.driver}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="helper">
          <Form.Label>Helper</Form.Label>
          <Form.Control
            type="number"
            name="helper"
            value={formData.helper}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="other">
          <Form.Label>Other</Form.Label>
          <Form.Control
            type="number"
            name="other"
            value={formData.other}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="fuelType">
          <Form.Label>Fuel Type</Form.Label>
          <Form.Control
            as="select"
            name="fuelType"
            value={formData.fuelType}
            onChange={handleChange}
          >
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="others">
          <Form.Label>Others</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="others"
            value={formData.others}
            onChange={handleChange}
          />
        </Form.Group>
    </>
  )
}

export default VehicleDetail