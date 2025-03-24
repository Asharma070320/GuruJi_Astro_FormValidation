import React from "react";

const Step2 = ({ formData, errors, handleChange }) => {
  return (
    <div className="step">
      <h2>Address Information</h2>
      <div className="form-group">
        <label>Address Line 1</label>
        <input
          type="text"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleChange}
          placeholder="Street address, P.O. box, company name"
          className={errors.addressLine1 ? "error" : ""}
        />
        {errors.addressLine1 && (
          <span className="error-message">{errors.addressLine1}</span>
        )}
      </div>
      <div className="form-group">
        <label>Address Line 2</label>
        <input
          type="text"
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleChange}
          placeholder="Apartment, suite, unit, building, floor, etc."
        />
      </div>
      <div className="form-group">
        <label>City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter your city"
          className={errors.city ? "error" : ""}
        />
        {errors.city && <span className="error-message">{errors.city}</span>}
      </div>
      <div className="form-group">
        <label>State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="Enter your state/province"
          className={errors.state ? "error" : ""}
        />
        {errors.state && <span className="error-message">{errors.state}</span>}
      </div>
      <div className="form-group">
        <label>Zip Code</label>
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          placeholder="Enter your postal/zip code"
          className={errors.zipCode ? "error" : ""}
        />
        {errors.zipCode && (
          <span className="error-message">{errors.zipCode}</span>
        )}
      </div>
    </div>
  );
};

export default Step2;
