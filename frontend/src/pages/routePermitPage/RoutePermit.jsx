import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const RoutePermit = () => {
  const [formData, setFormData] = useState({
    VehicleType: { vehicleTypeName: "", vehicleTypeRemarks: "" },
    YatayatSewa: {
      yatayatSewaName: "",
      registeredDate: "",
      renewValidDate: "",
      registeredAt: "",
      address: "",
      contactNo: "",
    },
    VehicleEmployee: {
      employeeAddress: "",
      employeeContact: "",
      employeeLicenceNumber: "",
      employeeLicenceIssuer: "",
    },
    VehicleOwner: {
      ownerName: "",
      ownerAddress: "",
      ownerContact: "",
      vehicleManagementPerson: "",
      addressManagementPerson: "",
    },
    Vehicle: {
      vehicleNumber: "",
      registeredDateVehicle: "",
      vehicleTypeId: "",
      engineNumber: "",
      chassisNumber: "",
      model: "",
      manufacturer: "",
      manufacturedYear: "",
      vehicleWeight: "",
      weightCapacity: "",
      seatCapacity: "",
      vehicleOwnerId: "",
      yatayatSewaId: "",
      ticketCounterAddress: "",
      parkingAddress: "",
      remarks: "",
      driver: "",
      helper: "",
      other: "",
      fuelType: "",
      others: "",
    },
    RouteDetail: {
      routeName: "",
      routeDetail: "",
      routeFee: "",
      routeDistance: "",
    },
    Permit: {
      permitNumber: "",
      permitIssueDate: "",
      attachedDocuments: "",
      vehicleId: "",
      permitOthers: "",
    },
    VehicleRoute: {
      previousRouteDetailsId: "",
      previousPermitNo: "",
      previousPermitDate: "",
      previousPermitValidDate: "",
      previousPermitIssuedBy: "",
      transferDate: "",
      newRouteDetailsId: "",
      fitnessTestDate: "",
      fitnessTestValidity: "",
      fitnessTestOffice: "",
      insuranceIssueDate: "",
      insuranceValidDate: "",
      insuranceIssuerCompany: "",
      insuranceType: "Full",
      applicantName: "",
      applicantAddress: "",
      applicantContact: "",
      isApplicantOwner: true,
      isManjuriNamaAttached: false,
      applicantCitizenshipNumber: "",
      isPermitApplicable: true,
      inapplicableReason: "",
      voucherNumber: "",
      voucherAmount: "",
      vehicleRouteDate: "",
      registeredBy: "",
    },
  });

  const handleChange = (e, section) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],

        [name]: type === "checkbox" ? checked : value,
      },
    }));
    console.log(section);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <Container>
      <h1 className="my-4">Combined Form</h1>
      <Form onSubmit={handleSubmit}>
        {/* VehicleRouteDetails */}

        {/* Submit Button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default RoutePermit;
