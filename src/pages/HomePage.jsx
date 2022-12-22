import AddListing from "../components/AddListing"
import { Link } from "react-router-dom"
import myImg from '../assets/dining-table-bbq.jpg'

function HomePage(){
    return (
        <main>
         <h1>RENT<span className="titleSpace"></span> A <span className="titleSpace"></span>YARD</h1>
        <img className="homeImage" src={myImg}/>
        
           
            <p>Perhaps you don’t have access to a backyard of your own, or maybe you’re just looking for a change of scenery or just a simple BBQ day. Whatever your reason for doing so, it’s surprisingly easy to rent a backyard and a grill for a day. Discover where and how to do so as well as a few examples of backyards that are available to rent in your area</p>
            <Link to="/listing">
            <button>Find Backyards</button>
          </Link>
        </main>
        
    )
}

export default HomePage