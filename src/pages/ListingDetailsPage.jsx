import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import iconLocation from '../assets/iconLocation.png'
import L from "leaflet";
import { MapContainer } from "react-leaflet";
import { TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ListingDetailsPage = () => {
const [listingArray, setListingArray] = useState([])



    let myIcon = L.icon({
      iconUrl: iconLocation,
    //   iconUrl: require("../../iconLocation.png"),
      iconSize: [36, 36],
      iconAnchor: [18, 18],
    });
const [map, setMap] = useState({
      lat: 25.779632, 
      lng: -80.19831072619859,
      zoom: 15,
    });



    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/listing`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        })
        .then(axiosResponse => {
            console.log(axiosResponse.data)
            setListingArray(axiosResponse.data)
        }) 
        .catch(err => console.log(err))
    }, [])





    return (
        
        <main className="ListingListPage">



            <div>
            <MapContainer
            className="mapContainer"
            id={"tagMap"}
            center={[map.lat, map.lng]}
            zoom={map.zoom}
            style={{ width: "100%", height: "40vh"}}
          >
            <TileLayer
              attribution='&copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
  
            {listingArray.map((spot) => {
              const point = [
                spot.latitude,
                spot.longitude,
              ];
  
              return (
                point[0] && (
                  <Marker icon={myIcon} position={point} key={spot["_id"]}>

                    <Popup>
                    <img
                        src={spot.yardAndGrillImage}
                        alt="testimage"
                        className="previewImage"
                      /><br></br>
                      <span>
                      {spot.title}
                        {/* <TheseTags photo={spot} /> */}
                      </span>
                      
                      <span>
                        {/* <Link to={`/${spot.title}/details`}>Yard details</Link> */}
                        
                        <br></br>
                        {spot.yardDetailsAndSize}
                        <br></br>
                        <br></br>
                        Price: ${spot.price}
                       
                      </span>
                      <br />
                      
                    </Popup>
                  </Marker>
                )
              );
            })}
          </MapContainer>

            </div>








            {listingArray.map(singleListing => {
                return (
                    <div className="ListingCard card" key={singleListing._id}>
                    
                    <img className="listingImages" src={singleListing.yardAndGrillImage}/> <img className="listingImages" src={singleListing.yardAndGrillImage}/> <img className="listingImages" src={singleListing.yardAndGrillImage}/> <img className="listingImages" src={singleListing.yardAndGrillImage}/> <img className="listingImages" src={singleListing.yardAndGrillImage}/>

                <p><b>Title:</b> {singleListing.title} <span className="titleSpace"></span>

                
                <b>Grill:</b> {singleListing.brandGrill} <span className="titleSpace"></span>

                
                <b>Grill model: </b>{singleListing.modelGrill}</p>

                
                <p className="yardDetails"> <b>Details:</b> {singleListing.yardDetailsAndSize} </p>

               
                <p><b>Price: </b> {singleListing.price} <a href="mailto:email@example.com?subject=More Info&body=I hope this email finds you well. I am writing to request more information about ypur yard.
Could you please provide me with some additional details.

Thank you">Request more info</a></p>
<br></br>
                <hr/>
                
              
                </div>
                )
            })}

            {/* <Link to="/YardUpdatePage">
        <button>Edit</button>
      </Link> */}

      
        </main>
    )
}

export default ListingDetailsPage