import React from 'react'
import { useState } from 'react'
import {
 NavLink,
 Outlet
} from "react-router-dom"
const Navbar = (props) => {
  const [menu, setMenu] = useState(false)
  // const [display,setDisplay] = useState("")
  return (<>


    <div className="ham_menu">

    <div className='nav'>
        <div className="logo">
            <h2>{props.title}</h2>
        </div>
      <ul className={!menu?"nav_ul":"nav_tohide"} >
        <li ><NavLink to="/">HOME</NavLink></li>
        <li ><NavLink to="/about">ABOUT</NavLink></li>
        <li ><NavLink to="/services">SERVICES</NavLink></li>
        <li ><NavLink to="/hire">SKILLS</NavLink></li>
        <li ><NavLink to="/contact">CONTACT ME</NavLink></li>
      </ul>
    </div>
    <div className="hamburger"><img src="./icons/instagram.png" alt="" onClick={()=>setMenu(!menu)}/></div>
    </div>

      <Outlet/>
    </>
  )
}

export default Navbar
