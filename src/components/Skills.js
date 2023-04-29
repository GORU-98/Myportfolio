import React from 'react'
import Skilldata from "./Skilldata"
const Skills = () => {
   
  return (
    <div className='skills'>

{
      Skilldata.map((skill)=>{
return <div className="skill_card" key={skill.id}>
      <div className="skill_logo">
      <img src={skill.imgsrc} alt="" />
      </div>
      <div className="skill_desc">
          <h1>{skill.title}</h1>
          <p>{skill.desc}</p>
          <button>Contact me</button>
      </div>
  </div>
})  
}    


      

      
    </div>
  )
}

export default Skills
