import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom'


function SignupPage (){

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


const onFormSubmit = e => {
    e.preventDefault()
    console.log(state)
    axios.post ('http://localhost:3001/auth/signup', state)
    .then(axiosResponse =>{
        console.log(axiosResponse.data)
        navigate('/login')
    } )
} 
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={onFormSubmit}>
                <label>Email  </label>
                <input value ={state.email} name="email" onChange={updateState}/>
                <br></br><br></br>
                <label>Name  </label>
                <input value ={state.name} name="name" onChange={updateState}/>
                <br></br><br></br>
                <label>Password  </label>
                <input value ={state.password} type="password" name="password" onChange={updateState}/>
                <br></br><br></br>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignupPage