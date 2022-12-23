import { useState, useContext, useEffect } from "react"
import axios from "axios"
import { post } from '../authServices/authService'
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../context/auth.context"


function AddListing() {

    const { user } = useContext(AuthContext)

const navigate = useNavigate()
const api = axios.create({
    // make sure you use PORT = 5005 (the port where our server is running)
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`
    // withCredentials: true // => you might need this option if using cookies and sessions
  });

const [title, setTitle] = useState('')
const [brandGrill, setBrandGrill] = useState('')
const [modelGrill, setModelGrill]= useState('')
const [yardDetailsAndSize, setYardDetailsAndSize]= useState('')
const [price, setPrice]= useState('')
const [yardAndGrillImage, setYardAndGrillImage]= useState('')
const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
})


const updateTitle = e => setTitle(e.target.value)
const updateBrandGrill = e => setBrandGrill(e.target.value)
const updateModelGrill = e => setModelGrill(e.target.value)
const updateYardDetailsAndSize = e => setYardDetailsAndSize(e.target.value)
const updatePrice = e => setPrice(e.target.value)
const updateYardAndGrillImage = e => setYardAndGrillImage(e.target.value)

const errorHandler = (err) => {
    throw err;
  };
  
  const uploadImage = (file) => {
    return post("/api/upload", file)
      .then(res => {
        console.log("Photo uploaD RESPONSE:", res.data)
        return res.data})
      .catch(errorHandler);
  };



const handleFormsSubmit =e => {
    e.preventDefault()
    post('/api/listing', {
        title,
        brandGrill,
        modelGrill,
        yardDetailsAndSize,
        price,
        yardAndGrillImage,
        owner: user._id,
        latitude: coordinates.lat,
        longitude: coordinates.lng
    })
    .then(axiosResponse => {
        console.log(axiosResponse.data)
        navigate('/listing')
    })
    .catch(err => console.log(err))

}


const handleFileUpload = (e) => {
    const uploadData = new FormData()
    uploadData.append('yardAndGrillImage', e.target.files[0])

    uploadImage(uploadData)
    .then(response => {
        console.log("RESPONDINGGGGGGGGG", response)
        setYardAndGrillImage(response.fileUrl)
    })
    .catch(err => console.log("error while uploading the file", err))
}



useEffect(() => {
    if (navigator.geolocation) {
 
        // Get current position
        // The permissions dialog will pop up
        navigator.geolocation.getCurrentPosition(function (position) {
          // Create an object to match Google's Lat-Lng object format
          const center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log('center: ', center)
          setCoordinates({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })

          // User granted permission
          // Center the map in the position we got
        }, function () {
          // If something goes wrong
          console.log('Error in the geolocation service.');
        });
      } else {
        // Browser says: Nah! I do not support this.
        console.log('Browser does not support geolocation.');
      }
}, [])


    return (
        <div className="yardForm">
     
     <form onSubmit={handleFormsSubmit}>
     <br></br><br></br><br></br>
     <label className="titles"> Title  </label>
     <input  className="inputs" value={title} onChange={updateTitle}/><br></br> <br></br>
     <label  className="titles"> Grill Brand  </label>
     <input  className="inputs" value={brandGrill} onChange={updateBrandGrill}/><br></br> <br></br>
     <label  className="titles">Grill Model  </label>
     <input className="inputs" value={modelGrill} onChange={updateModelGrill}/><br></br> <br></br>
     <label  className="titles"> Yard Details + Size  </label>
     <textarea className="inputs" value={yardDetailsAndSize} rows="4" cols="25" onChange={updateYardDetailsAndSize}/> <br></br><br></br>
     <br></br><br></br>
     <label  className="titles"> Price  </label>
     <input className="inputs" value={price} onChange={updatePrice} type="number" min="20" max="1000"placeholder="$ per hour"  /> <br></br><br></br>
     <label  className="titles">Image  </label>
     <input className="inputs"  onChange={(e) => handleFileUpload(e)} type="file"/>
     <br></br><br></br>
      
     <br></br><button className="yardRent">Click here to list your yard</button>
     <br></br><br></br><br></br>
     </form>
     </div>
    )
  }
   
  export default AddListing;
  