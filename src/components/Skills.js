import React from 'react'
import Skilldata from "./Skilldata"

import {
  NavLink,
 } from "react-router-dom"
const Skills = (props) => {
   
  return (
    <div className='skills'  style={{color:props.color}}>

{
      Skilldata.map((skill)=>{
return <div className="skill_card" key={skill.id}>
      <div className="skill_logo">
      <img src={skill.imgsrc} alt="" />
      </div>
      <div className="skill_desc">
          <h1>{skill.title}</h1>
          <p>{skill.desc}</p>
          {/* <button onClick={handleContact}>Contact me</button> */}
          <NavLink className="Navlink" to="/contact">Contact me</NavLink>
      </div>
  </div>
})  
}    


      

      
    </div>
  )
}

export default Skills
