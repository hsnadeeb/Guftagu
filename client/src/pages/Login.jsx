import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(prevState => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login or signup logic here
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {isLogin ? (
            <div>
               <div> 
              <label htmlFor="userName">Username:</label>
              <input type="text" id="userName" className="form-input" required />
              </div>
              <div>
              <label htmlFor="loginPassword">Password:</label>
              <input type="password" id="loginPassword" className="form-input" required />
              </div>
            </div>
          ) : (
            <div>
                <div>
              <label htmlFor="signupName">Username:</label>
              <input type="text" id="userName" className="form-input" required />
              </div>
              {/* <label htmlFor="signupEmail">Email:</label>
              <input type="email" id="signupEmail" className="form-input" required /> */}
              <div>
              <label htmlFor="signupPassword">Password:</label>
              <input type="password" id="signupPassword" className="form-input" required />
              </div>
              <div>
              <label htmlFor="signupPassword">Confirm Password:</label>
              <input type="password" id="signupPasswordCheck" className="form-input" required />
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
