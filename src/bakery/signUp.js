import React, { useState } from 'react';
import  "../bakery/signup.css";
import { addSignup  } from '../service/api';


const SignupForm = () => {
  const [cridentials, setcridentials] = useState({
    name:"",
    email:"",
    password:""
 });

 const {name, email,password}=cridentials;


 const handleChange=(e)=> {
   const data=({...cridentials , [e.target.name]:e.target.value});
   setcridentials(data);

 }
 const handleSubmit=  async (e)=> {
    e.preventDefault();
    try{
        await addSignup(cridentials);
        setcridentials({
        name:"",
        email:"",
        password:""

        });

         alert("registered");
        } catch (error) {
            alert("not registered");
        }
 };



  return (
    <div className='Signup-container'>
        <div className="form-box">
      <form className="form">
        <span className="title">Sign up</span>
        <span className="subtitle">Create a free account with your email.</span>
        <div className="form-container">
          <input
           name='name'
            type="text"
            className="input"
            onChange={handleChange}
            required
        />
          <input
          name='email'
            type="email"
            className="input"
             onChange={handleChange}
          />
          <input
          name='password'
            type="password"
            className="input"
            onChange={handleChange}
            required/>
        </div>
        <button type="submit" onClick={handleSubmit}>Sign up</button>
      </form>
      <div className="form-section">
        <p>Have an account? <a href="">Log in</a></p>
      </div>
    </div>
    </div>
);

  };
  
  

export default SignupForm;
