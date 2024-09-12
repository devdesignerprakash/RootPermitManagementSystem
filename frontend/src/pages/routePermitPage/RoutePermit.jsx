import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const RoutePermit = () => {
  const [formData, setFormData] = useState({
    VehicleType:{ vehicleTypeName: '',
      vehicleTypeRemarks: ''

    },

    // YatayatSewa
    yatayatSewaName: '',
    registeredDate: '',
    renewValidDate: '',
    registeredAt: '',
    address: '',
    contactNo: '',

    // EmployeeDetails
    employeeAddress: '',
    employeeContact: '',
    employeeLicenceNumber: '',
    employeeLicenceIssuer: '',

    // VehicleOwners
    ownerName: '',
    ownerAddress: '',
    ownerContact: '',
    vehicleManagementPerson: '',
    addressManagementPerson: '',

    // Vehicles
    vehicleNumber: '',
    registeredDateVehicle: '',
    vehicleTypeId: '',
    engineNumber: '',
    chassisNumber: '',
    model: '',
    manufacturer: '',
    manufacturedYear: '',
    vehicleWeight: '',
    weightCapacity: '',
    seatCapacity: '',
    vehicleOwnerId: '',
    yatayatSewaId: '',
    ticketCounterAddress: '',
    parkingAddress: '',
    remarks: '',
    driver: '',
    helper: '',
    other: '',
    fuelType: 'Petrol',
    others: '',

    // RouteDetails
    routeName: '',
    routeDetail: '',
    routeFee: '',
    routeDistance: '',

    // Permits
    permitNumber: '',
    permitIssueDate: '',
    attachedDocuments: '',
    vehicleId: '',
    permitOthers: '',

    // VehicleRouteDetails
    previousRouteDetailsId: '',
    previousPermitNo: '',
    previousPermitDate: '',
    previousPermitValidDate: '',
    previousPermitIssuedBy: '',
    transferDate: '',
    newRouteDetailsId: '',
    fitnessTestDate: '',
    fitnessTestValidity: '',
    fitnessTestOffice: '',
    insuranceIssueDate: '',
    insuranceValidDate: '',
    insuranceIssuerCompany: '',
    insuranceType: 'Full',
    applicantName: '',
    applicantAddress: '',
    applicantContact: '',
    isApplicantOwner: true,
    isManjuriNamaAttached: false,
    applicantCitizenshipNumber: '',
    isPermitApplicable: true,
    inapplicableReason: '',
    voucherNumber: '',
    voucherAmount: '',
    vehicleRouteDate: '',
    registeredBy: '',
    approver: '',
    requester: '',
  });

  const handleChange = (e, section) => {
    const { name, value, type, checked} = e.target;

    setFormData(prevState => ({
      ...prevState,
      [section]: {
        ...prevState[section],
       
        [name]: type === 'checkbox' ? checked : value,
      },
    }));
    console.log(section)
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <Container>
      <h1 className="my-4">Combined Form</h1>
      <Form onSubmit={handleSubmit}>
        {/* VehicleTypes */}
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

        {/* YatayatSewa */}
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

        {/* EmployeeDetails */}
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

        {/* VehicleOwners */}
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

        {/* Vehicles */}
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
        <Form.Group controlId="vehicleTypeId">
          <Form.Label>Vehicle Type</Form.Label>
          <Form.Control
            type="number"
            name="vehicleTypeId"
            value={formData.vehicleTypeId}
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
        <Form.Group controlId="vehicleOwnerId">
          <Form.Label>Vehicle Owner</Form.Label>
          <Form.Control
            type="number"
            name="vehicleOwnerId"
            value={formData.vehicleOwnerId}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="yatayatSewaId">
          <Form.Label>Yatayat Sewa</Form.Label>
          <Form.Control
            type="number"
            name="yatayatSewaId"
            value={formData.yatayatSewaId}
            onChange={handleChange}
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

        {/* RouteDetails */}
        <h3>Route Details</h3>
        <Form.Group controlId="routeName">
          <Form.Label>Route Name</Form.Label>
          <Form.Control
            type="text"
            name="routeName"
            value={formData.routeName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="routeDetail">
          <Form.Label>Route Detail</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="routeDetail"
            value={formData.routeDetail}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="routeFee">
          <Form.Label>Route Fee</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            name="routeFee"
            value={formData.routeFee}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="routeDistance">
          <Form.Label>Route Distance</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            name="routeDistance"
            value={formData.routeDistance}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Permits */}
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

        {/* VehicleRouteDetails */}
        <h3>Vehicle Route Details</h3>
        <Form.Group controlId="previousRouteDetailsId">
          <Form.Label>Previous Route Details</Form.Label>
          <Form.Control
            type="number"
            name="previousRouteDetailsId"
            value={formData.previousRouteDetailsId}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="previousPermitNo">
          <Form.Label>Previous Permit Number</Form.Label>
          <Form.Control
            type="text"
            name="previousPermitNo"
            value={formData.previousPermitNo}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="previousPermitDate">
          <Form.Label>Previous Permit Date</Form.Label>
          <Form.Control
            type="date"
            name="previousPermitDate"
            value={formData.previousPermitDate}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="previousPermitValidDate">
          <Form.Label>Previous Permit Valid Date</Form.Label>
          <Form.Control
            type="date"
            name="previousPermitValidDate"
            value={formData.previousPermitValidDate}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="previousPermitIssuedBy">
          <Form.Label>Previous Permit Issued By</Form.Label>
          <Form.Control
            type="text"
            name="previousPermitIssuedBy"
            value={formData.previousPermitIssuedBy}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="transferDate">
          <Form.Label>Transfer Date</Form.Label>
          <Form.Control
            type="date"
            name="transferDate"
            value={formData.transferDate}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="newRouteDetailsId">
          <Form.Label>New Route Details</Form.Label>
          <Form.Control
            type="number"
            name="newRouteDetailsId"
            value={formData.newRouteDetailsId}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="fitnessTestDate">
          <Form.Label>Fitness Test Date</Form.Label>
          <Form.Control
            type="date"
            name="fitnessTestDate"
            value={formData.fitnessTestDate}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="fitnessTestValidity">
          <Form.Label>Fitness Test Validity</Form.Label>
          <Form.Control
            type="date"
            name="fitnessTestValidity"
            value={formData.fitnessTestValidity}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="fitnessTestOffice">
          <Form.Label>Fitness Test Office</Form.Label>
          <Form.Control
            type="text"
            name="fitnessTestOffice"
            value={formData.fitnessTestOffice}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="insuranceIssueDate">
          <Form.Label>Insurance Issue Date</Form.Label>
          <Form.Control
            type="date"
            name="insuranceIssueDate"
            value={formData.insuranceIssueDate}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="insuranceValidDate">
          <Form.Label>Insurance Valid Date</Form.Label>
          <Form.Control
            type="date"
            name="insuranceValidDate"
            value={formData.insuranceValidDate}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="insuranceIssuerCompany">
          <Form.Label>Insurance Issuer Company</Form.Label>
          <Form.Control
            type="text"
            name="insuranceIssuerCompany"
            value={formData.insuranceIssuerCompany}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="insuranceType">
          <Form.Label>Insurance Type</Form.Label>
          <Form.Control
            as="select"
            name="insuranceType"
            value={formData.insuranceType}
            onChange={handleChange}
            required
          >
            <option value="Full">Full</option>
            <option value="Partial">Partial</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="applicantName">
          <Form.Label>Applicant Name</Form.Label>
          <Form.Control
            type="text"
            name="applicantName"
            value={formData.applicantName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="applicantAddress">
          <Form.Label>Applicant Address</Form.Label>
          <Form.Control
            type="text"
            name="applicantAddress"
            value={formData.applicantAddress}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="applicantContact">
          <Form.Label>Applicant Contact</Form.Label>
          <Form.Control
            type="text"
            name="applicantContact"
            value={formData.applicantContact}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="isApplicantOwner">
          <Form.Check
            type="checkbox"
            name="isApplicantOwner"
            label="Is Applicant Owner"
            checked={formData.isApplicantOwner}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="isManjuriNamaAttached">
          <Form.Check
            type="checkbox"
            name="isManjuriNamaAttached"
            label="Is Manjuri Nama Attached"
            checked={formData.isManjuriNamaAttached}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="applicantCitizenshipNumber">
          <Form.Label>Applicant Citizenship Number</Form.Label>
          <Form.Control
            type="text"
            name="applicantCitizenshipNumber"
            value={formData.applicantCitizenshipNumber}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="isPermitApplicable">
          <Form.Check
            type="checkbox"
            name="isPermitApplicable"
            label="Is Permit Applicable"
            checked={formData.isPermitApplicable}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="inapplicableReason">
          <Form.Label>Inapplicable Reason</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="inapplicableReason"
            value={formData.inapplicableReason}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="voucherNumber">
          <Form.Label>Voucher Number</Form.Label>
          <Form.Control
            type="text"
            name="voucherNumber"
            value={formData.voucherNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="voucherAmount">
          <Form.Label>Voucher Amount</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            name="voucherAmount"
            value={formData.voucherAmount}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="voucherDate">
          <Form.Label>Voucher Date</Form.Label>
          <Form.Control
            type="date"
            name="voucherDate"
            value={formData.voucherDate}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default RoutePermit;
