import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom'
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


const onFormSubmit = e => {
    e.preventDefault()
    console.log(state)
    axios.post ('http://localhost:3001/auth/login', state)
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
                <label>Email  </label>
                <input value={state.email} name="email" onChange={updateState}/>
                <br></br><br></br>
                <label>Password  </label>
                <input value={state.password} type="password" name="password" onChange={updateState}/>
                <br></br><br></br>
                <button>Log in</button>
            </form>
        </div>
    )
}
export default LoginPage