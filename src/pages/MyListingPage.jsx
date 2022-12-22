import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const MyListingPage = ({userId}) => {
const [listingArray, setListingArray] = useState([])


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api//my-listings/${userId}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        })
        .then(axiosResponse => {
            console.log("Mylistings", axiosResponse.data)
            setListingArray(axiosResponse.data)
        }) 
        .catch(err => console.log(err))
    }, [])

    return (
        
        <main className="MyListingListPage">
        
            {listingArray.map(singleListing => {
                return (
                    <div className="MyListingCard card" key={singleListing._id}>
                <Link to={`/listing/this-listing/${singleListing._id}`}>
    
                <h3>{singleListing.title}</h3>
            
                </Link>
                
                </div>
                )
            })}
        </main>
    )
}

export default MyListingPage