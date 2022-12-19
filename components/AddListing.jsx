import { useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function AddListing() {

const navigate = useNavigate()

const [brandGrill, setBrandGrill] = useState('')
const [modelGrill, setModelGrill]= useState('')
const [yardDetailsAndSize, setYardDetailsAndSize]= useState('')
const [price, setPrice]= useState('')
const [yardAndGrillImage, setYardAndGrillImage]= useState('')


const updateBrandGrill = e => setBrandGrill(e.target.value)
const updateModelGrill = e => setModelGrill(e.target.value)
const updateYardDetailsAndSize = e => setYardDetailsAndSize(e.target.value)
const updatePrice = e => setPrice(e.target.value)
const updateYardAndGrillImage = e => setYardAndGrillImage(e.target.value)



const handleFormsSubmit =e => {
    e.preventDefault()
    axios.post('http://localhost:3001/api/listing', {
        brandGrill,
        modelGrill,
        yardDetailsAndSize,
        price,
        yardAndGrillImage,
    })
    .then(axiosResponse => {
        console.log(axiosResponse.data)
        navigate('/listing')
    })
    .catch(err => console.log(err))

}

    return (
        <div>
     
     <form onSubmit={handleFormsSubmit}>
     <label> Grill Brand  </label>
     <input value={brandGrill} onChange={updateBrandGrill}/><br></br> <br></br>
     <label>Grill Model  </label>
     <input value={modelGrill} onChange={updateModelGrill}/><br></br> <br></br>
     <label> Yard Details + Size  </label>
     <textarea value={yardDetailsAndSize} onChange={updateYardDetailsAndSize}/> <br></br><br></br>
     <label> Price  </label>
     <input value={price} onChange={updatePrice}/> <br></br><br></br>
     <label>Grill and Yard images  </label>
     <input value={yardAndGrillImage} onChange={updateYardAndGrillImage} type="file" multiple/><br></br><br></br>
      
     <br></br><button>Click here to list your yard</button>
     </form>
     </div>
    )
  }
   
  export default AddListing;
  