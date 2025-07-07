import {NavLink} from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
   const navitem=[{link:"/",ele:"Home" },
    {link:"/About",ele:"About"}
  ]


  return (
   <nav>
   {/* logo section */}
   <div>
    <img src={logo} alt="Logo" loading="lazy"></img>
   </div>
   {/* navbar items */}
   <div>
    <ul>
    {
      navitem.map((item,ind)=>{
        return (<li key={ind}><NavLink to={item.link}>{item.ele}</NavLink></li>)
      })
    }
   
    </ul>
   </div>
   {/* login,search,cart */}
   <div></div>

   </nav>
  )
}
