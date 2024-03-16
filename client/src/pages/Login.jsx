import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const toggleForm = () => {
    setIsLogin(prevState => !prevState);
    setErrors({});
  };

  const validateEmail = (email) => {
    // Basic email validation using regular expression
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    // Password validation with at least 6 characters
    return password.length >= 6;
  };

  const validateUsername = (username) => {
    // Username validation with only alphanumeric characters and underscores
    const re = /^[a-zA-Z0-9_]+$/;
    return re.test(username);
  };

  const validateConfirmPassword = (confirmPassword) => {
    // Match password and confirmPassword
    return formData.password === confirmPassword;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters long.';
    }

    if (!validateUsername(formData.userName)) {
      newErrors.userName = 'Username can only contain letters, numbers, and underscores.';
    }

    if (!validateConfirmPassword(formData.confirmPassword)) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (Object.keys(newErrors).length === 0) {
      // If no errors, proceed with form submission
      // Handle login or signup logic here
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clearing errors on input change
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {isLogin ? (
            <div>
              <div>
                <label htmlFor="loginEmail">Email:</label>
                <input type="email" id="loginEmail" name="email" className="form-input" value={formData.email} onChange={handleChange} required />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              <div>
                <label htmlFor="loginPassword">Password:</label>
                <input type="password" id="loginPassword" name="password" className="form-input" value={formData.password} onChange={handleChange} required />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
            </div>
          ) : (
            <div>
              <div>
                <label htmlFor="signupUserName">Username:</label>
                <input type="text" id="signupUserName" name="userName" className="form-input" value={formData.userName} onChange={handleChange} required />
                {errors.userName && <span className="error-message">{errors.userName}</span>}
              </div>
              <div>
                <label htmlFor="signupEmail">Email:</label>
                <input type="email" id="signupEmail" name="email" className="form-input" value={formData.email} onChange={handleChange} required />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              <div>
                <label htmlFor="signupPassword">Password:</label>
                <input type="password" id="signupPassword" name="password" className="form-input" value={formData.password} onChange={handleChange} required />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
              <div>
                <label htmlFor="signupPasswordCheck">Confirm Password:</label>
                <input type="password" id="signupPasswordCheck" name="confirmPassword" className="form-input" value={formData.confirmPassword} onChange={handleChange} required />
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
              </div>
            </div>
          )}
          <button type="submit" className="form-button">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p onClick={toggleForm} className="form-link">
          {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
        </p>
      </div>
    </div>
  );
}

export default Login;
