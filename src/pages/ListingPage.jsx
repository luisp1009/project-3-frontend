import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import UpdateListing from "../components/UpdateListing"

const ListingPage = () => {
const [listingArray, setListingArray] = useState([])


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
            <h1>Yards for rent</h1>
            {listingArray.map(singleListing => {
                return (
                    <div className="ListingCard card" key={singleListing._id}>
                <Link to={`/listing/${singleListing._id}`}>
                Click the Title to find out more
                <h3>{singleListing.title}</h3>
            
                </Link>
                </div>
                )
            })}
        </main>
    )
}

export default ListingPage