import React from 'react'

const RouteDetail = ({formData, handleChange}) => {
  return (
    <>
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
    </>
  )
}

export default RouteDetail