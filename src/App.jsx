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
import IsPrivate from './components/IsPrivate'
import IsAnon from './components/IsAnon'


import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
    <Navbar/>
    <Routes>
    
    <Route path='/' element ={<HomePage/>}/>
    <Route path='/rent' element={<IsPrivate><RentPage/></IsPrivate>}/>
    <Route path='/profile' element={<IsPrivate><ProfilePage/></IsPrivate>}/>
    <Route path='/listing' element ={<IsPrivate><ListingPage/></IsPrivate>}/>
    <Route path='/listing/:listingId' element ={<IsPrivate><ListingDetailsPage/></IsPrivate>}/>
    <Route path='/listing/this-listing/:listingId' element ={<IsPrivate><MyListingDetailsPage/></IsPrivate>}/>
    <Route path='/signup' element ={<IsAnon><SignUpPage/></IsAnon>}/>
    <Route path='/login' element ={<IsAnon><LoginPage/></IsAnon>}/>



    </Routes>
   
    </div>
  )
}

export default App
