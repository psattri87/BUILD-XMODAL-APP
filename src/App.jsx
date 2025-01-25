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
    const pattern = /^\d{10}$/;
    return pattern.test(phoneNumber);
  }

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  function validateDate(dob) {
    return new Date(dob).getTime() < new Date().getTime()
  }

  function validateForm() {
    if (!validateEmail(formData.email)) {
      alert("Invalid email. Please check your email address.");
      return false;
    }
    if (!validatePhoneNumber(formData.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return false;
    }
    if (!validateDate(formData.dob)) {
      alert("Invalid date of birth. Please enter valid date.");
      return false;
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setFormData({ ...formData, name: "", email: "", phone: "", dob: "" });
    }
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
          <form className="modal" onSubmit={handleSubmit}>
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
              <button className="submit-button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
