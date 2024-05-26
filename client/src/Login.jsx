import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';  // Import the custom CSS file
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const result = await axios.post('http://localhost:3001/login', formData);
        if(result.data === "Success"){
          navigate('/home')
        } else {
          toast.error("Invalid Credentials!")
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  const validate = (data) => {
    const errors = {};
    if (!data.email) errors.email = 'Email is required';
    if (!data.password) errors.password = 'Password is required';
    return errors;
  };

  return (
    <div className="login-container">
      <div className="green-section"></div>
      <div className="form-section">
        <div className="form-container">
          <h2 className="text-center mb-4 italic-text">Login to your account</h2>
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
            <div className="form-group mb-3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={`form-control ${formErrors.password ? 'is-invalid' : ''}`}
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary btn-block custom-button">Log In</button>
            </div>
            <p className="mt-3 text-center">Don't have an account? <Link to="/register" className="text-success">Sign Up</Link></p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
