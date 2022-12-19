import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ListingDetailsPage = () => {
const [listingArray, setListingArray] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3001/api/listing', {
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
            {listingArray.map(singleListing => {
                return (
                    <div className="ListingCard card" key={singleListing._id}>
                
                <h3>{singleListing.title}</h3>
                <h4>{singleListing.brandGrill}</h4>
                <h4>{singleListing.modelGrill}</h4>
                <h4>{singleListing.yardDetailsAndSize}</h4>
                <h4>{singleListing.price}</h4>
                <h4>{singleListing.yardAndGrillImage}</h4>
              
                </div>
                )
            })}
        </main>
    )
}

export default ListingDetailsPage