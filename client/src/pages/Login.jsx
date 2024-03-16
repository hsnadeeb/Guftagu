import React, { useState } from "react";
import "./Login.css";
import maleAvatar from "../assets/male_avatar.png";
import femaleAvatar from "../assets/female_avatar.png";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "male",
    profilePicture: null,
  });
  const [errors, setErrors] = useState({});

  const toggleForm = () => {
    setIsLogin((prevState) => !prevState);
    setErrors({});
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const validateUsername = (username) => {
    const re = /^[a-zA-Z0-9_]+$/;
    return re.test(username);
  };

  const validateConfirmPassword = (confirmPassword) => {
    return formData.password === confirmPassword;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!validatePassword(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }

    if (!validateUsername(formData.userName)) {
      newErrors.userName =
        "Username can only contain letters, numbers, and underscores.";
    }

    if (!validateConfirmPassword(formData.confirmPassword)) {
      newErrors.confirmPassword = "Passwords do not match.";
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
    setErrors({ ...errors, [name]: "" });
  };

  //   const handleFileChange = (event) => {
  //     const file = event.target.files[0];
  //     setFormData({ ...formData, profilePicture: file });
  //   };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Create a URL for the selected file
    const imageUrl = URL.createObjectURL(file);

    // Update the formData state to include the profile picture
    setFormData({ ...formData, profilePicture: file, imageUrl: imageUrl });
  };

  const handleLogin = () => {
    console.log("handlelogin");
  };

  const handleSignup = () => {
    console.log("handlesignup");
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {isLogin ? (
            <div>
              <div>
                <label htmlFor="loginEmail">Email:</label>
                <input
                  type="email"
                  id="loginEmail"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>
              <div>
                <label htmlFor="loginPassword">Password:</label>
                <input
                  type="password"
                  id="loginPassword"
                  name="password"
                  className="form-input"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && (
                  <span className="error-message">{errors.password}</span>
                )}
              </div>
            </div>
          ) : (
            <div className="innercontainer">
              <div className="left-section">
                <div className="avatar">
                  <div className="profile-picture">
                    <img
                      src={
                        formData.imageUrl ||
                        (formData.gender === "female"
                          ? femaleAvatar
                          : maleAvatar)
                      }
                      alt="Avatar"
                      className="avatar-image"
                    />
                  </div>
                  <div className="signUpPage">
                    <label htmlFor="gender">Gender:</label>
                    <br />
                    <select
                      id="gender"
                      name="gender"
                      className="form-input"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="profilePicture">Profile Picture:</label>
                  <input
                    type="file"
                    id="profilePicture"
                    name="profilePicture"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="form-input"
                  />
                </div>
              </div>
              <div className="right-section">
                <div>
                  <label htmlFor="signupUserName">Username:</label>
                  <input
                    type="text"
                    id="signupUserName"
                    name="userName"
                    className="form-input"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                  />
                  {errors.userName && (
                    <span className="error-message">{errors.userName}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="signupEmail">Email:</label>
                  <input
                    type="email"
                    id="signupEmail"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="signupPassword">Password:</label>
                  <input
                    type="password"
                    id="signupPassword"
                    name="password"
                    className="form-input"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  {errors.password && (
                    <span className="error-message">{errors.password}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="signupPasswordCheck">Confirm Password:</label>
                  <input
                    type="password"
                    id="signupPasswordCheck"
                    name="confirmPassword"
                    className="form-input"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  {errors.confirmPassword && (
                    <span className="error-message">
                      {errors.confirmPassword}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
          <button
            type="submit"
            className="form-button"
            onClick={isLogin ? handleLogin : handleSignup}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p onClick={toggleForm} className="form-link">
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}

export default Login;
