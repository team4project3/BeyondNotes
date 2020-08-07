import React, {useState} from 'react';
// axios  is used to make API requests to the backend.
import axios from 'axios';
import './LoginForm.css';
import {API_BASE_URL} from '../../constants/apiContants';
import { withRouter } from "react-router-dom";

function LoginForm(props) {

// The state object will contain the email and password values.
// The useState hook is being used to handle the values entered by the user
    const [state , setState] = useState({
        email : "",
        password : "",
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


// axios  is used to make API requests to the backend.

// !! backend server needed for handling API!!

// added a post request to the server where 'API_BASE_URL'
//  is defined in the 'constants file'.

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload={
            "email":state.email,
            "password":state.password,
        }
        axios.post(API_BASE_URL+'login', payload)
            .then(function (response) {
                if(response.data.code === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Login successful. Redirecting to home page..'
                    }))
                    redirectToHome();
                    props.showError(null)
                }
                else if(response.data.code === 204){
                    props.showError("Username and password do not match");
                }
                else{
                    props.showError("Username does not exists");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

// Redirects the user to the Home page  
    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/home');
    }

// Redirects the user to the login page 
    const redirectToRegister = () => {
        props.history.push('/register'); 
        props.updateTitle('Register');
    }
    return(

// inputs on-screen:
//  added input for email on line no 87.
//  added password inputs on 99.
//  added Event handler to submit button
//  for sending a request to backend server
//  and we can redirect the user to the home page.

        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group">
                <label htmlFor="exampleInputEmail1">Login with Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={state.email}
                       onChange={handleChange}
                />
                <small id="emailHelp" className="text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" 
                       className="form-control" 
                       id="password" 
                       placeholder="Password"
                       value={state.password}
                       onChange={handleChange} 
                />
                </div>
                <div className="form-check">
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >Submit</button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="registerMessage">
                <span>Dont have an account? </span>
                <span className="loginText" onClick={() => redirectToRegister()}>Register</span> 
            </div>
        </div>
    )
}

export default withRouter(LoginForm);
