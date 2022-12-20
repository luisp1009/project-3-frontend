import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { post } from "../authServices/authService";
import { AuthContext } from '../context/auth.context';
import MyListingPage from './MyListingPage'
import axios from "axios";
 
function ProfilePage() {

    const [isEditingUsername, setIsEditingUsername] = useState(false)
    const [isEditingEmail, setIsEditingEmail] = useState(false)
    const [isEditingPassword, setIsEditingPassword] = useState(false)
    const { user, isLoggedIn, logOutUser, setUser } = useContext(AuthContext);

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



    return (
        <div>
            <br /> <br /> <br />
     

        {isEditingUsername ? (
            <span>
                <span>Username:  </span>
                <input placeholder={user.name} onChange={(e) => inputChange(e)}  name="name"/>
                <button onClick={submitUpdate}>update username</button>
            </span>
        ) : ( 
            <span>
                <span> <b> Username: {user.name} </b></span>
                <button onClick={() => setIsEditingUsername(true)}>edit</button>
            </span>
            
        )
        }

        
        <br /> <br />
        
        {isEditingEmail ? (
            <span>
                <span>Email:  </span>
                <input placeholder={user.email} onChange={(e) => inputChange(e)}  name="email"/>
                <button onClick={submitUpdate}>update email</button>
            </span>
        ) : ( 
            <span>
                <span> <b> Email: {user.email} </b></span>
                <button onClick={() => setIsEditingEmail(true)}>edit</button>
            </span>
            
        )
        }
        <br /> <br />

        {isEditingPassword ? (
            <span>
                <span>Password:  </span>
                <input placeholder="******" onChange={(e) => inputChange(e)}  name="password"/>
                <button onClick={submitUpdate}>update password</button>
            </span>
        ) : ( 
            <span>
                <span> <b> Password: ***** </b></span>
                <button onClick={() => setIsEditingPassword(true)}>edit</button>
            </span>
            
        )
        }



        <br /> <br />
        <hr />
        <br /> <br />
        <span> <b>MY YARD: </b></span>
        <MyListingPage/>
      </div>
    )
}

export default ProfilePage