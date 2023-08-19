import React, { useState } from 'react';
import './App.css';

function Form() {
  const [formData, setFormData] = useState({
   firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="form-container">
      
      <form>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
        </div>
      </form>
      <div className="display-data">
        <h2>Your Form Data:</h2>
        {Object.entries(formData).map(([key, value]) => (
          <p key={key}>
            {key}: {value}
          </p>
        ))}
      </div>
      </div>
      )
}



export default Form;
