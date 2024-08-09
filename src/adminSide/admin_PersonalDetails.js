import React, { useState } from "react";
import "./AdminPersonal.css";

function Admin_PersonalDetails() {
  const [personalDetails, setPersonalDetails] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Personal details updated!");
  };

  return (
    <div className="admin-panel">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>
            <a href="/adminHome">Dashboard</a>
          </li>
          <li>
            <a href="/adminDetails">Personal Details</a>
          </li>
          <li>
            <a href="/adminHome">Manage Content</a>
          </li>
        </ul>
      </div>
      <div className="personal-details">
        <h2>Admin Details</h2>
        <div className="current-details">
          <h3>Current Details</h3>
          <p>
            <strong>Username:</strong> {personalDetails.username}
          </p>
          <p>
            <strong>Name:</strong> {personalDetails.name}
          </p>
          <p>
            <strong>Email:</strong> {personalDetails.email}
          </p>
          <p>
            <strong>Password:</strong> {personalDetails.password}
          </p>
          <p>
            <strong>Phone Number:</strong> {personalDetails.phoneNumber}
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={personalDetails.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={personalDetails.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={personalDetails.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={personalDetails.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={personalDetails.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="submit-btn">
            Update Details
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin_PersonalDetails;
