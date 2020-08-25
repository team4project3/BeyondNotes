import React, {useState} from 'react';
// axios  is used to make API requests to the backend.
import axios from 'axios';
import './RegistrationForm.css';
import {API_BASE_URL} from '../../constants/apiContants';
import { withRouter } from "react-router-dom";

function RegistrationForm(props) {

// The state object will contain the email and password values.
// The useState hook is being used to handle the values entered by the user.
    const [state , setState] = useState({
        email : "",
        password : "",
        confirmPassword: "",
        successMessage: null
    })

// The setState method is responsible for updating these values.
// Responsibility for updating the 'values' lies with the 'handleChange' function.    
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

// 'sendDetailsToServer' for backend request.
// axios  is used to make API requests to the backend.

// !! backend server needed for handling API!!

// added a post request to the server where 'API_BASE_URL'
//  is defined in the 'constants file'.

    const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {
            props.showError(null);
            const payload={
                "email":state.email,
                "password":state.password,
            }
            axios.post("/api/register", payload)
                .then(function (response) {
                    if(response.status === 200){
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Registration successful. Redirecting to home page..'
                        }))
                        redirectToHome();
                        props.showError(null)
                    } else{
                        props.showError("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } else {
            props.showError('Please enter valid username and password')    
        }

// Redirects the user to the Home page  
    }
    const redirectToHome = () => {
        props.updateTitle('Login')
        props.history.push('/login');
    }

// Redirects the user to the login page 
    const redirectToLogin = () => {
        props.updateTitle('Login')
        props.history.push('/login'); 
    }

// 'handleSubmitClick' function checks if the password inputs
//  match and calls the'sendDetailsToServer'function to make a 
//  backend API request or show an error.

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            sendDetailsToServer()    
        } else {
            props.showError('Passwords do not match');
        }
    }
    return(


// inputs on-screen:
//  added input for email on line no 102.
//  added password inputs on 114 and 124.
//  added Event handler to register button
//      for sending a request to backend server.

<>
        <div className="row">    
            <div className="col s3"></div>
            <div className="col s6">
                <nav className="navbar grey darken-2 z-depth-3">
                    <div className="col s1"></div>
                    <div className="col s10">
                    <div className="flow-text">
                        <span id="title" className="header beyondNotes">Beyond Notes!</span>
                    </div>
                    </div>
                    <div className="col s1"></div>
                </nav>
            </div>
            <div className="col s3"></div>
        </div>       

        <div className="row">    
                    <div className="col s3"></div>
                    <div className="col s6">
                    <div className="card grey darken-2 z-depth-3">

            <form className="form-group">

                <div className="row">    
                    <div className="col s1"></div>
                    <div className="col s10">
                        <div htmlFor="exampleInputEmail1">Register with Email address</div>                        
                    </div>
                    <div className="col s1"></div>
                </div>

                <div className="row">
                    <div className="col s1"></div>
                    <div className="col s10">
                        <input type="email" 
                        className="form-control" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email" 
                        value={state.email}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="col s1"></div>
                    </div>

                    <div class="row">
                    <div className="col s1"></div>
                    <div className="col s10">
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="col s1"></div>
                </div>

                <div className="row">    
                    <div className="col s1"></div>
                    <div className="col s10">
                    <div htmlFor="exampleInputPassword1">Password</div>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange} 
                    />
                    </div>
                    <div className="col s1"></div>
                </div>

                <div className="row">    
                    <div className="col s1"></div>
                    <div className="col s10">
                    <div htmlFor="exampleInputPassword1">Confirm Password</div>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                        value={state.confirmPassword}
                        onChange={handleChange} 
                    />
                    </div>
                    <div className="col s1"></div>
                </div>

                <div className="row">
                    <div className="col s5"></div>
                    <div className="col s2">
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            onClick={handleSubmitClick}
                            className=" orange lighten-2 registerButton"
                        >Register</button>
                    </div>
                    <div className="col s5"></div>
                </div>

            </form>
            <div class="row">
            <div className="col s1"></div>
                <div className="col s10">
                    <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                        {state.successMessage}
                    </div>
                    <div className="mt-2">
                        <span className="haveaccount">Already have an account? </span>
                        <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> 
                    </div>
            

                    </div>
                <div className="col s1"></div>
            </div>
        </div>
        
        </div>
        <div className="col s3"></div>
</div>
</>
 
 );
}


export default withRouter(RegistrationForm);

