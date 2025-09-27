import "./Navbar.css"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {

    return(
        <div className="nav-bar">
           <div className="logo-cont">
           <h3>Foodieland.</h3>
           </div>
            
               <ul className="nav-cont">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/recipes">Recipes</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/login">Logout</Link></li>
               </ul>
           


            <div className="social-media-icons">
                <FaFacebook/>
                <FaTwitter/>
                <FaInstagram/>

            </div>


        </div>
    )
}

export default Navbar;