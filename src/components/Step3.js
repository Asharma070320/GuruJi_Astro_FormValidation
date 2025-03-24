import React from "react";

const Step3 = ({ formData }) => {
  return (
    <div className="step">
      <h2>Confirmation</h2>
      <div className="confirmation-details">
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Phone:</strong> {formData.phone}
        </p>
        <p>
          <strong>Address Line 1:</strong> {formData.addressLine1}
        </p>
        <p>
          <strong>Address Line 2:</strong> {formData.addressLine2}
        </p>
        <p>
          <strong>City:</strong> {formData.city}
        </p>
        <p>
          <strong>State:</strong> {formData.state}
        </p>
        <p>
          <strong>Zip Code:</strong> {formData.zipCode}
        </p>
      </div>
    </div>
  );
};

export default Step3;
