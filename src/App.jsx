import { useState } from "react";
import "./App.css";
// import Form from "./Form";

function App() {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name: " + name);
    console.log("value: " + value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function validatePhoneNumber(phoneNumber) {
    // Regex pattern for 10-digit phone number
    const pattern = /^\d{10}$/;

    // Validate phone number and update message
    const isValid = pattern.test(phoneNumber);
    console.log(isValid);
    if (!isValid) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    }

    // Return validation status
    return isValid;
  }

  function validateDate(dob) {
    if (new Date(dob).getTime() > new Date().getTime()) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    }
  }

  const handleSubmit = () => {
    validatePhoneNumber(formData.phone);
    validateDate(formData.dob);
    console.log("Form submitted:", formData);
    setFormData({ ...formData, name: "", email: "", phone: "", dob: "" });
  };
  const openForm = () => {
    setFormVisible(true);
  };

  const hideForm = () => {
    setFormVisible(false);
  };

  return (
    <div>
      <h1>User Details Modal</h1>
      <button onClick={openForm}>Open Form</button>
      {formVisible && (
        <>
          <div className="overlay" onClick={hideForm}></div>
          <div className="modal">
            <div className="modal-content">
              <h2>Fill Details</h2>
              <label>Username:</label>
              <input
                type="text"
                name="name"
                id="username"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label>Email Address:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <label>Date of Birth:</label>
              <input
                type="date"
                name="dob"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
              <button
                className="submit-button"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
