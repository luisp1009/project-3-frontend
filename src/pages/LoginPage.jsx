import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom'

import { post } from "../authServices/authService";

import { AuthContext } from '../context/auth.context'


function LoginPage (){
    const navigate = useNavigate()

    const { storeToken, authenticateUser } = useContext(AuthContext);

    const [state, setState] = useState ({
        email: '',
        password: ''
    })

const updateState = e => setState ({
    ...state,
    [e.target.name]: e.target.value
})

const [passwordShown, setPasswordShown] = useState(false);

const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };


const onFormSubmit = e => {
    e.preventDefault()
    console.log(state)
    post('/auth/login', state)
    .then(axiosResponse =>{
        console.log(axiosResponse.data)
        storeToken(axiosResponse.data.authToken);
        authenticateUser()
        navigate('/')
    } )
    .catch(err  => console.log(err))
} 
    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={onFormSubmit}>
                {/* <label>Email  </label> */}
                <span>
                <span className="emailInputAndIcon">
                <i className="fa fa-envelope icon "></i>
                <input className="loginInput" value={state.email} name="email" onChange={updateState}/>
                </span>
                <br></br><br></br>
                {/* <label>Password  </label> */}
                
                
                <i className="fa fa-lock icon "></i>
                <input className="loginInput" value={state.password} 

                type={passwordShown ? "text" : "password"} 
                
                name="password" onChange={updateState} />
                <i class="far fa-eye" id="togglePassword" onClick={togglePassword}></i>
                </span>

                <br></br><br></br>
                <button>Log in</button>
            </form>
        </div>
    )
}
export default LoginPage