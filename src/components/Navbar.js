import React from 'react'
import { useState } from 'react'
import {
 NavLink,
 Outlet
} from "react-router-dom"
const Navbar = (props) => {
  const [menu, setMenu] = useState(false)
  return (<>


    <div className="ham_menu">

    <div className='nav'>
        <div className="logo">
            <h2>{props.title}</h2>
        </div>
      <ul className="nav_ul">
        <li ><NavLink to="/">HOME</NavLink></li>
        <li ><NavLink to="/about">ABOUT</NavLink></li>
        <li ><NavLink to="/services">SERVICES</NavLink></li>
        <li ><NavLink to="/hire">SKILLS</NavLink></li>
        <li ><NavLink to="/contact">CONTACT ME</NavLink></li>
      </ul>
    </div>
    <div className="hamburger"><img src="./icons/menu.png" alt="" onClick={()=>setMenu(!menu )} />
    <ul className="nav_tohide" style={{display:menu ? "flex" : "none"}}>
        <li ><NavLink to="/" onClick={()=>setMenu(!menu )}>HOME</NavLink></li>
        <li ><NavLink to="/about" onClick={()=>setMenu(!menu )}>ABOUT</NavLink></li>
        <li ><NavLink to="/services" onClick={()=>setMenu(!menu )}>SERVICES</NavLink></li>
        <li ><NavLink to="/hire" onClick={()=>setMenu(!menu )}>SKILLS</NavLink></li>
        <li ><NavLink to="/contact" onClick={()=>setMenu(!menu )}>CONTACT ME</NavLink></li>
      </ul>
    </div>
    </div>

      <Outlet/>
    </>
  )
}

export default Navbar
