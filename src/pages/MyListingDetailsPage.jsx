import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"


const MyListingDetailsPage = () => {
const [listing, setListing] = useState(null)

const params = useParams()


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/listing/${params.listingId}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        })
        .then(axiosResponse => {
            console.log(axiosResponse.data)
            setListing(axiosResponse.data)
        }) 
        .catch(err => console.log(err))
    }, [])

    return (
        
        <main className="MyListingListPage">
        {listing &&

                <div className="MyListingCard card" key={listing._id}>
                <img className="listingImages" src={listing.yardAndGrillImage}/>
                
                <p><b>Title:</b> {listing.title}</p>

                
                <p><b>Grill:</b> {listing.brandGrill}</p>

                
                <p><b>Grill model: </b>{listing.modelGrill}</p>

                
                <p className="yardDetails"> <b>Details:</b> {listing.yardDetailsAndSize}</p>

               
                <p><b>Price:</b> {listing.price}</p>

                
               
              
                </div>}

        </main>
    )
}

export default MyListingDetailsPage