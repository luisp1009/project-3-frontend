import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UpdateListing from "../components/UpdateListing";

const ListingDetailsPage = () => {

  const { listingId } = useParams();

  const [listing, setListing] = useState(null);

  const getListingDetails = () => {
    axios.get(`http://localhost:3001/api/listing/${listingId}`,{
        headers: {
            authorization: `Bearer ${localStorage.getItem('authToken')}`
        }
    } )
      .then(axiosResponse => {
        console.log(axiosResponse.data);
        setListing(axiosResponse.data);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getListingDetails();
  }, [])

  return (
    <div className="ListingDetails">
      <h1>Grill to rent</h1>
      {listing ? (
        <div>
          <h3>{listing.brandGrill}</h3>
          <h3>{listing.modelGrill}</h3>
          <h3>{listing.yardDetailsAndSize}</h3>
          <h3>{listing.price}</h3>
          <p>{listing.yardAndGrillImage}</p>
          <ol>
            {listing.tasks.map(singleTask => {
              return <li className="TaskCard card" key={singleTask}>{singleTask}</li>
            })}
          </ol>
          <AddTask listingId={listing._id} getListingDetails={getListingDetails} />
          <UpdateListing
            brandGrill={listing.brandGrill}
            modelGrill={listing.modelGrill}
            yardDetailsAndSize={listing.yardDetailsAndSize}
            price={listing.price}
            yardAndGrillImage={listing.yardAndGrillImage}
            listingId={listing._id}
            getListingsDetails={getListingDetails}
          />
        </div>
      ) : <p>loading...</p>}
    </div>
    
  );
};

export default ListingDetailsPage;