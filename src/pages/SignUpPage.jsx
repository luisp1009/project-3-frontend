import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom'
import { post } from "../authServices/authService";


function SignUpPage (){

    const navigate = useNavigate()

    const [state, setState] = useState ({
        email: '',
        name: '',
        password: ''
    })

const updateState = e => setState ({
    ...state,
    [e.target.name]: e.target.value
})

const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

const onFormSubmit = e => {
    e.preventDefault()
    console.log(state)
    post('/auth/signup', state)
    .then(axiosResponse =>{
        console.log(axiosResponse.data)
        navigate('/login')
    } )
} 
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={onFormSubmit}>
               
                <i class="fa fa-envelope icon"></i>
                <input value ={state.email} name="email" onChange={updateState}/>
                <br></br><br></br>

               
                <i class="fa fa-user icon"></i>
                <input value ={state.name} name="name" onChange={updateState}/>
                <br></br><br></br>

                
                <i class="fa fa-lock icon" id="togglePassword" onClick={togglePassword}></i>
                <input  value ={state.password} type="password" name="password" onChange={updateState}/>
                <i class="far fa-eye" id="togglePassword" onClick={togglePassword}></i>
                
                <br></br><br></br>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpPage