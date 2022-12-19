import axios from "axios";
import { useState } from "react";

const UpdateListing = (props) => {
  
  const [state, setState] = useState({
    price: props.price,
    yardDetailsAndSize: props.yardDetailsAndSize,
    yardAndGrillImage: props.yardAndGrillImage
  });

  const updateState = e => setState({
    ...state,
    [e.target.name]: e.target.value
  });

  const submitFormHandler = e => {
    e.preventDefault();
    console.log('form submit works');
    axios.put(`http://localhost:3001/api/list/${props.listingId}`, {
        price: props.price,
        yardDetailsAndSize: props.yardDetailsAndSize,
        yardAndGrillImage: props.yardAndGrillImage
    })
      .then(axiosResponse => {
        console.log(axiosResponse.data);
        props.getListingDetails();
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>Update your Listing</h1>
      <form onSubmit={submitFormHandler}>
        <label>New Price</label>
        <input onChange={updateState} value={state.price} name="price" />
        <label>New Description</label>
        <input onChange={updateState} value={state.yardDetailsAndSize} name="description" />
        <label>image</label>
        <input onChange={updateState} value={state.yardAndGrillImage} name="image" /> 
        <button>Update Listing</button>
        
      </form>
    </div>
  );

};

export default UpdateListing;