import React, { useState } from 'react';
import './PersonalDetails.css';

function PersonalDetails() {
  const [details, setDetails] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    phone: ''
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save changes logic here
    alert('Personal details updated!');
  };

  return (
    <div className="personal-details">
      <h2>Update Personal Details</h2>
      <form onSubmit={handleSubmit}>
        <label>Username: <input type="text" name="username" value={details.username} onChange={handleChange} /></label>
        <label>Name: <input type="text" name="name" value={details.name} onChange={handleChange} /></label>
        <label>Email: <input type="email" name="email" value={details.email} onChange={handleChange} /></label>
        <label>Password: <input type="password" name="password" value={details.password} onChange={handleChange} /></label>
        <label>Phone: <input type="text" name="phone" value={details.phone} onChange={handleChange} /></label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default PersonalDetails;
