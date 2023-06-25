import React, { useState } from 'react';
import './App.css';
import { useUserAuth } from './UserAuthContest.js';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';


const SignupForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) =>{
    e.preventDefault();
    setError("");
    try{
    await signUp(email, password);
    navigate("/Home");
    }catch(err){
    setError(err.message);
    }
    };

    return (
        <div className="signupform">
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="signup-container">
        <h1 className="login-name-size">King's Library</h1>
        <form name="myform"  onSubmit={handleSubmit}>
        <h1 className="signup-name">SIGNUP</h1> <br />
        <div className="signup-desc-container">
            <div className="email-name-container">
                <h3 className="email-name-style">Name:</h3>
            </div>
            <input type="text" className="email-box-style" placeholder="Name" name="name" required="" />
            <div className="email-name-container">
                <h3 className="email-name-style">Username:</h3>
            </div>
            <input type="text" className="email-box-style" placeholder="Username" name="username" required="" />
            <div className="email-name-container">
                <h3 className="email-name-style">Email:</h3>
            </div>
            <input type="email" className="email-box-style" placeholder="Email" name="email" required=""
            onChange={ (e) => setEmail(e.target.value)}/>
            <div className="email-name-container">
                <h3 className="email-name-style">Mobile Number:</h3>
            </div>
            <input type="tel" className="email-box-style" placeholder="Mobile number" name="mobileno" required="" />
            <div className="email-name-container">
                <h3 className="email-name-style">Password:</h3>
            </div>
            <input type="password" className="email-box-style" placeholder="Password" name="password" required=""
            onChange={ (e) => setPassword(e.target.value)}/>
            <br />
            <div className="center">
            <button className="button-26" role="button">Sign Up</button>
        </div>
        </div>
        </form>
        </div>
        </div>
        );
        };

        export default SignupForm;