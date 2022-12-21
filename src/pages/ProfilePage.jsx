import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { post } from "../authServices/authService";
import { AuthContext } from '../context/auth.context';
import MyListingPage from './MyListingPage'

import { useNavigate } from "react-router-dom";

import axios from "axios";

import { get } from "../authServices/authService";
 
function ProfilePage() {

    const [isEditingUsername, setIsEditingUsername] = useState(false)
    const [isEditingEmail, setIsEditingEmail] = useState(false)
    const [isEditingPassword, setIsEditingPassword] = useState(false)
    const { user, isLoggedIn, logOutUser, setUser, setIsLoggedIn, authenticateUser } = useContext(AuthContext);

    let navigate = useNavigate()

    const [updatedUser, setUpdatedUser] = useState({
        name: user.name,
        email: user.email,
        password: user.password
      });

    const inputChange = (e) => {
        console.log("This is the target", e.target.name)
        setUpdatedUser({...updatedUser, [e.target.name]: e.target.value})
        console.log("this is the state", updatedUser)
    }

   
   
      const submitUpdate = () => {

        console.log("This is user ID", user._id)

        post(`/auth/${user._id}`, {
          name: updatedUser.name,
          email: updatedUser.email,
          password: updatedUser.password,
        })
          .then(axiosResponse => {
            console.log(axiosResponse.data);
            setUser(axiosResponse.data)
          })
          .catch(err => console.log(err))
          .finally(() => {
            setIsEditingUsername(false)
            setIsEditingEmail(false)
            setIsEditingPassword(false)
          })
      }

      const submitDelete = () => {
        console.log("This is user ID", user._id)
        if (window.confirm("Are you sure you want to delete?") === true) {

        get(`/auth/${user._id}/delete`)
        .then(axiosResponse => {
            localStorage.clear() 
            authenticateUser()
            navigate('/signup')   
            console.log(axiosResponse.data)
        })
        .catch(err => console.log(err))
      }
      else {
        return
       }

    }

    const [passwordShown, setPasswordShown] = useState(false);

const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };


    return (
        <div className="userEditDiv">
            <br /> <br /> <br />
     
<div className="editProfile">
        {isEditingUsername ? (
            <span>
            <i class="fa fa-user icon"></i>
                <input  className="editInputUpdate" placeholder={user.name} onChange={(e) => inputChange(e)}  name="name"/>
                <button  onClick={submitUpdate}>update username</button>
            </span>
        ) : ( 
            <span>
            <i class="fa fa-user icon"></i>
                <span> <b> Username: {user.name} </b></span>
               
                <button  onClick={() => setIsEditingUsername(true)}>edit</button>
            </span>
            
        )
        }

        
        <br /> <br />
        
        {isEditingEmail ? (
            <span>
                
                <i className="fa fa-envelope icon "></i>
                <input className="editInputUpdate" placeholder={user.email} onChange={(e) => inputChange(e)}  name="email"/>
                <button  onClick={submitUpdate}>update email</button>
            </span>
        ) : ( 
            <span>
                <span> <i className="fa fa-envelope icon "></i> <b> Email: {user.email}</b> </span>
                <button  onClick={() => setIsEditingEmail(true)}>edit</button>
            </span>
            
        )
        }
        <br /> <br />

        {isEditingPassword ? (
            <span>
            <i className="fa fa-lock icon "></i>
                <input className="editInputUpdate" placeholder="******" onChange={(e) => inputChange(e)}  name="password"/>
                <button  onClick={submitUpdate}>update password</button>
            </span>
        ) : ( 
            <span>
                <span> <i className="fa fa-lock icon "></i>
                <b> Password: *****</b></span>
                <button onClick={() => setIsEditingPassword(true)}>edit</button>
            </span>
            
        )
        }

        <br /> <br />
        <Link onClick={submitDelete}><p className="deleteBtn">click here to delete your account</p></Link>



        {/* <br /> <br />
        <hr />
        <br /> <br />
        <span> <b>MY YARD: </b></span>
        <MyListingPage/> */}
        </div>
      </div>
    )
}

export default ProfilePage