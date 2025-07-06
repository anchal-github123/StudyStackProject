import {NavLink} from "react-router-dom";
import logo from "../assets/logo.svg";
import Home from "../pages/Home";
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
    <NavLink to="/" element={<Home></Home>}></NavLink>
   
    </ul>
   </div>
   {/* login,search,cart */}
   <div></div>

   </nav>
  )
}
