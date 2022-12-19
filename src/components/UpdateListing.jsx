import axios from "axios";
import { put } from '../authServices/authService'
import { useState } from "react";

const UpdateListing = (props) => {
  
  const [state, setState] = useState({
    title: props.title,
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
    put(`/api/list/${props.listingId}`, {
        title: props.title,
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
      <label>New Title</label>
        <input onChange={updateState} value={state.title} name="title" />
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