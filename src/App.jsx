import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import './App.css'
import ListingPage from './pages/ListingPage'
import ListingDetailsPage from './pages/ListingDetailsPage'
import ProfilePage from './pages/ProfilePage'
import RentPage from './pages/RentPage'
import SignupPage from './pages/SignupPage'
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
    <Route path='/signup' element ={<IsAnon><SignupPage/></IsAnon>}/>
    <Route path='/login' element ={<IsAnon><LoginPage/></IsAnon>}/>



    </Routes>
   
    </div>
  )
}

export default App
