import React from 'react';
import { useState } from'react';
import { useNavigate,Link } from'react-router-dom';
import { useUserAuth } from './UserAuthContest';
import {AiFillGoogleCircle} from 'react-icons/ai'
import Alert from 'react-bootstrap/Alert';
import Login from './App.js';
import './App.css';


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn, googleSignIn,facebookSignIn } = useUserAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try{
         await logIn(email, password);
         navigate("/Home");
      }catch(err){
         setError(err.message);
      }
     };
  
     const handleGoogleSignIn = async (e) => {
      e.preventDefault();
  
      try {
        await googleSignIn();
        navigate("/Home");
      }catch(err){
       setError(err.message);
      }
    };


    return (
        <div>
          <div className="loginform">
          {error && <Alert variant="danger">{error}</Alert>} 
            <div className="login-signup-container" id="container">
              <h1 className="login-name-size">King's Library</h1>
              <h2 className="login-welcome-title">Welcome Back! </h2>
              <p className='p-login-container'>Please enter the details to sign in.</p>
                <form onSubmit={handleSubmit}>
                  <div className="border-google-container">
                    <div className="google-login-container" onClick={ handleGoogleSignIn }>
                      <AiFillGoogleCircle 
                          onClick={ handleGoogleSignIn }
                          />
                      <a className='login-with-google'>Login with Google</a>
                       
                  </div>
                  </div>
                <div className="login-using-email-container">
                  <h3 className="login-element-or">or</h3>
                  <div className="email-name-container">
                    <h3 className="email-name-style">Email:</h3>
                  </div>
                    <input type="email" className="email-box-style"  placeholder="Enter your email" name="email" required="" 
                    onChange={ (e) => setEmail(e.target.value)}/>
                    <div className="email-name-container">
                    <h3 className="email-name-style">Password:</h3>
                  </div>
                    <input type="password" className="email-box-style" placeholder="Enter your password" name="password" required="" 
                    onChange={ (e) => setPassword(e.target.value)}/>
                    {/* <a href="#">Forgot your password?</a> */}
                    <div className="login-button-container">
                    <button className="button-26" role="button">Login</button>
                    </div>
                  </div>
                </form>
                <div className="signup-name-container">
                  <h3 className='email-name-style' >New to the website?</h3>
                  <Link to="/signup" className="signup-link">Signup</Link>
                </div>
                
                </div>
              </div>
            </div>
      );
    };
    
    export default LoginForm;
