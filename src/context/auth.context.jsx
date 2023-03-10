import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const API_URL= import.meta.env.VITE_BACKEND_URL;

const AuthContext = createContext();

function AuthProviderWrapper({children}){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem('authToken', token)
  }

  const authenticateUser = () => {           //  <==  ADD  
    // Get the stored token from the localStorage
    const storedToken = localStorage.getItem('authToken');
    
    // If the token exists in the localStorage
    if (storedToken) {
      console.log("This is the token:", storedToken)
      // We must send the JWT token in the request's "Authorization" Headers
      axios.get(
        `${API_URL}/auth/verify`, 
        // "http://localhost:3001/auth/verify",
        { headers: { Authorization: `Bearer ${storedToken}`} }
      )
      .then((response) => {
        // If the server verifies that JWT token is valid  
        const user = response.data;
       // Update state variables        
        setIsLoggedIn(true);
        setIsLoading(false);
        setUser(user);        
      })
      .catch((error) => {
        // If the server sends an error response (invalid token) 
        // Update state variables         
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);        
      });      
    } else {
      // If the token is not available (or is removed)
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);      
    }   
  }

  const removeToken = () => {
    localStorage.removeItem("authToken");
  }
 
 
  const logOutUser = () => {       
    removeToken();
    authenticateUser();
  }  

useEffect(() => {
    authenticateUser()
},[])

  return (
    <AuthContext.Provider value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser,
        setUser
        }}>

      {children}
    </AuthContext.Provider>
  );

};

export {
  AuthContext,
  AuthProviderWrapper
}