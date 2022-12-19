import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import MyListingPage from './MyListingPage'
 
function ProfilePage() {

    const [isEditingUsername, setIsEditingUsername] = useState(false)
    const [isEditingEmail, setIsEditingEmail] = useState(false)
   

  const { user, isLoggedIn, logOutUser } = useContext(AuthContext);
    return (
        <div>
            <br /> <br /> <br />
     

        {isEditingUsername ? (
            <span>
                <span> {'Username:'} </span>
                <input />
                <button onClick={() => setIsEditingUsername(true)}>update</button>
            </span>
        ) : ( 
            <span>
                <span> <b> Username: {user.name} </b></span>
                <button onClick={() => setIsEditingUsername(true)}>edit</button>
            </span>
            
        )
        }

        
        <br /> <br />
        <
        {isEditingEmail ? (
            <span>
                <span> {'Email:'} </span>
                <input />
                <button onClick={() => setIsEditingEmail(true)}>update</button>
            </span>
        ) : ( 
            <span>
                <span> <b> Email: {user.email} </b></span>
                <button onClick={() => setIsEditingEmail(true)}>edit</button>
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