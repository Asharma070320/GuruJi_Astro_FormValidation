import React, { useEffect, useState } from "react";
import "./ValidationForm.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { ToastContainer, toast } from "react-toastify";

const ValidationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      if (!formData.phone) newErrors.phone = "Phone is required";
    } else if (step === 2) {
      if (!formData.addressLine1)
        newErrors.addressLine1 = "Address Line 1 is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.state) newErrors.state = "State is required";
      if (!formData.zipCode) newErrors.zipCode = "Zip Code is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const success = (message) => {
    toast.success(message);
  };

  const handleSubmit = () => {
    if (validateStep()) {
      success("Form submitted successfully!");
      localStorage.removeItem("formData");
      setFormData({
        name: "",
        email: "",
        phone: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zipCode: "",
      });
      setStep(1);
    }
  };

  return (
    <div className="set_formImage">
      {/* Form container */}
      <div className="form_container">
        {/* Alert Message */}
        <ToastContainer position="top-center" />
        {/* Tabs */}
        <div className="tabs">
          <button
            className={`tab ${step === 1 ? "active" : ""}`}
            onClick={() => setStep(1)}
          >
            Step 1
          </button>
          <button
            className={`tab ${step === 2 ? "active" : ""}`}
            onClick={() => setStep(2)}
            disabled={step < 2}
          >
            Step 2
          </button>
          <button
            className={`tab ${step === 3 ? "active" : ""}`}
            onClick={() => setStep(3)}
            disabled={step < 3}
          >
            Step 3
          </button>
        </div>

        {/* Step content */}
        <div className="form-step">
          {step === 1 && (
            <Step1
              formData={formData}
              errors={errors}
              handleChange={handleChange}
            />
          )}
          {step === 2 && (
            <Step2
              formData={formData}
              errors={errors}
              handleChange={handleChange}
            />
          )}
          {step === 3 && <Step3 formData={formData} />}
        </div>

        {/* Navigation buttons */}
        <div className="navigation-buttons">
          <button onClick={handleBack} disabled={step === 1}>
            Back
          </button>
          {step < 3 ? (
            <button onClick={handleNext}>Next</button>
          ) : (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </div>

      {/* Right Side Image */}
      <div className="image">
        <img
          src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
          alt="Laptop.img"
        />
      </div>
    </div>
  );
};

export default ValidationForm;
