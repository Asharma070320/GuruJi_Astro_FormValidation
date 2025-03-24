import React from "react";
import "./Step.css";

const Step1 = ({ formData, errors, handleChange }) => {
  return (
    <div className="step">
      <h2>Personal Information</h2>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className={errors.name ? "error" : ""}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          className={errors.email ? "error" : ""}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className={errors.phone ? "error" : ""}
        />
        {errors.phone && <span className="error-message">{errors.phone}</span>}
      </div>
    </div>
  );
};

export default Step1;
