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
               
                <p><b>Title:</b> {singleListing.title}</p>

                
                <p><b>Grill:</b> {singleListing.brandGrill}</p>

                
                <p><b>Grill model: </b>{singleListing.modelGrill}</p>

                
                <p className="yardDetails"> <b>Details:</b> {singleListing.yardDetailsAndSize}</p>

               
                <p><b>Price:</b> {singleListing.price}</p>

                
                <img src={singleListing.yardAndGrillImage}/>
                
              
                </div>
                )
            })}

            <Link to="/YardUpdatePage">
        <button>Edit</button>
      </Link>
        </main>
    )
}

export default ListingDetailsPage