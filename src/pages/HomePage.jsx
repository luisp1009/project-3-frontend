import AddListing from "../components/AddListing"
import { Link } from "react-router-dom"


function HomePage(){
    return (
        <main>
        <img className="gifHome" src="/src/assets/project3.gif"></img>
            <h1>Stop grilling inside your aparment</h1>
            <p>Perhaps you don’t have access to a backyard of your own, or maybe you’re just looking for a change of scenery or just a simple BBQ day. Whatever your reason for doing so, it’s surprisingly easy to rent a backyard and a grill for a day. Discover where and how to do so as well as a few examples of backyards that are available to rent in your area</p>
            <Link to="/listing">
            <button>Find Backyards</button>
          </Link>
        </main>
        
    )
}

export default HomePage