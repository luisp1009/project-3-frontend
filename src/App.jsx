import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import './App.css'
import ListingPage from './pages/ListingPage'
import ListingDetailsPage from './pages/ListingDetailsPage'
import MyListingDetailsPage from './pages/MyListingDetailsPage'
import ProfilePage from './pages/ProfilePage'
import RentPage from './pages/RentPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import PrivateRoute from './components/PrivateRoute'
import IsAnon from './components/IsAnon'


import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
    <Navbar/>
    <Routes>
    
    <Route path='/' element ={<HomePage/>}/>
    <Route path='/rent' element={<PrivateRoute><RentPage/></PrivateRoute>}/>
    <Route path='/profile' element={<PrivateRoute><ProfilePage/></PrivateRoute>}/>
    <Route path='/listing' element ={<PrivateRoute><ListingPage/></PrivateRoute>}/>
    <Route path='/listing/:listingId' element ={<PrivateRoute><ListingDetailsPage/></PrivateRoute>}/>
    <Route path='/listing/this-listing/:listingId' element ={<PrivateRoute><MyListingDetailsPage/></PrivateRoute>}/>
    <Route path='/signup' element ={<IsAnon><SignUpPage/></IsAnon>}/>
    <Route path='/login' element ={<IsAnon><LoginPage/></IsAnon>}/>



    </Routes>
   
    </div>
  )
}

export default App
