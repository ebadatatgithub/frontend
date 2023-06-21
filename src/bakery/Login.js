
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Reset the form
//     setUsername('');
//     setPassword('');
//   };

  const handleSubmit = useMemo(() => (e) => {
    e.preventDefault();

    setUsername('');
    setPassword('');
  }, []);


 
  const firstInputRef = useRef(null);

  useEffect(() => {
    firstInputRef.current.focus();
  }, []);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
      <h4>Login Page</h4>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          ref={firstInputRef}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit" className="log-bt">Login</button>

        <img src="bor.webp" alt="Logo" />
        
        
      </form>
    </div>
  );
};

export default Login;