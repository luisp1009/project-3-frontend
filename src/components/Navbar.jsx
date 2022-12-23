import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

 
function Navbar() {

  const { user, isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    
    <div className="navigation">
   
     <div className="userLoggeIn">
          <br></br>
          {isLoggedIn && (
      <span className="username">Hi {user.name}</span>
    )} {isLoggedIn && (
          <button  className="logoOutBtn"onClick={logOutUser}>Logout</button> )}
          </div>
        
    <nav>
    
      <Link to="/">
        <button>Home</button>
      </Link>

      {isLoggedIn && (
        <><Link to="/rent">
            <button>Rent your Outdoor space</button>
          </Link>
          <Link to="/listing">
            <button>Find Backyards</button>
          </Link>
          
          <Link to="/profile">
            <button>Profile</button>
          </Link>
          
         
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/login">
            <button>Log In</button>
          </Link>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          
        </>
      )}
      
      
    </nav>
   
    </div>
  );
}
 
export default Navbar;