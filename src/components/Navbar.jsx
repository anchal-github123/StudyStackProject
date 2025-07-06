import Navlink from "react-router-dom";
import logo from "../assets/logo.svg";
export default function Navbar() {
  return (
   <nav>
   {/* logo section */}
   <div>
    <img src={logo} alt="Logo" loading="lazy"></img>
   </div>
   {/* navbar items */}
   <div>
    <ul>
    <Navlink to="/Home" element></Navlink>
   
    </ul>
   </div>
   {/* login,search,cart */}
   <div></div>

   </nav>
  )
}
