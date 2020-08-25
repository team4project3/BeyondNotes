import React, { useState } from 'react';
// axios  is used to make API requests to the backend.
import axios from 'axios';
import { API_BASE_URL } from '../../constants/apiContants';
import { withRouter } from "react-router-dom";

function LoginForm(props) {

    // The state object will contain the email and password values.
    // The useState hook is being used to handle the values entered by the user
    const [state, setState] = useState({
        email: "",
        password: "",
        successMessage: null
    })

    // The setState method is responsible for updating these values.
    // Responsibility for updating the 'values' lies with the 'handleChange' function.
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }


    // axios  is used to make API requests to the backend.

    // !! backend server needed for handling API!!

    // added a post request to the server where 'API_BASE_URL'
    //  is defined in the 'constants file'.

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload = {
            "email": state.email,
            "password": state.password,
        }
        axios.post( '/api/login', payload)
            .then(function (response) {
                if (response.status === 200) {
                    setState(prevState => ({
                        ...prevState,
                        'successMessage': 'Login successful. Redirecting to home page..'
                    }))
                    redirectToHome();
                    props.showError(null)
                }
                else if (response.status === 204) {
                    props.showError("Username and password do not match");
                }
                else {
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
    return (

        // inputs on-screen:
        //  added input for email on line no 87.
        //  added password inputs on 99.
        //  added Event handler to submit button
        //  for sending a request to backend server
        //  and we can redirect the user to the home page.
        <>
        <div className="row">    
            <div className="col s3"></div>
            <div className="col s6">
            <nav className="navbar grey darken-2 z-depth-5">
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
                    <div className="card grey darken-2 z-depth-5">
    
            <form className="form-group">

                <div className="row">    
                    <div className="col s1"></div>
                    <div className="col s10">
                        <div htmlFor="exampleInputEmail1">Login with Email address</div>
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
                        <small id="emailHelp" className="text-muted">We'll never share your email with anyone else.</small>
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
                    <div className="col s5"></div>
                    <div className="col s2">
                        <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmitClick}
                        className=" orange lighten-2 loginButton"
                        >Submit</button>
                    </div>
                    <div className="col s5"></div>
                </div>

            </form>
            <div class="row">
                <div className="col s1"></div>
                <div className="col s10">
                    <div className="registerMessage">
                        <span className="donthaveaccount">Dont have an account? </span>
                        <span className="loginText" onClick={() => redirectToRegister()}>Register</span>
                    </div>
                </div>
                <div className="col s1"></div>
            </div>
        </div>
        
        </div>
        <div className="col s3"></div>
        </div>
        </>
        
        
    )
}

export default withRouter(LoginForm);
