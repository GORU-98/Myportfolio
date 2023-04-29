import React, { useState } from 'react'
import {
    Link,
} from "react-router-dom"
import All from './All'
import Client from './Client'
import Server from './Server'
// import Stack from './Stack'
const Project = () => {


    const handleall =()=>{
        setAll(<All />)
        setallClasss("active")
        setclientClasss("")
        setserverClasss("")
    }

    const handleclient =()=>{
        setAll(<Client/>)
        setclientClasss("active1")
        setallClasss("")
        setserverClasss("")
    }

    const handleserver =()=>{
        setAll(<Server/>)
        setserverClasss("active2")
        setallClasss("")
        setclientClasss("")
    }

    // const handleclick3 =()=>{
    //     setAll(<Stack/>)
    //     console.log("goru")
    // }
    const [all,setAll]=useState(<All/>)
    const [allclass,setallClasss]=useState("active")
    const [clientclass,setclientClasss]=useState("")
    const [serverclass,setserverClasss]=useState("")



    
  return (
    <div className='project'>
      <ul>
        <li  onClick={handleall}><Link className={allclass}>All</Link></li>
        <li onClick={handleclient}><Link className={clientclass} >Fronted</Link></li>
        <li onClick={handleserver}><Link className={serverclass}>Backend</Link></li>
        {/* <li onClick={handleclick3}><Link >Full Stack</Link></li> */}
      </ul>
      <div className="all_project">
        {all}
      </div>
      </div>
  )
}

export default Project
