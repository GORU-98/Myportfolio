import React from 'react'
import { useState } from 'react'
import Project from './Project'
import Quality from './Quality'

const Home = () => {
  const handlehover=()=>{
    setDisplay("inline")
    
  }
  const handlehover1=()=>{
    setDisplay1("inline")
    
  }
  const handlehover2=()=>{
    setDisplay2("inline")
    
  }
  const handlehover3=()=>{
    setDisplay3("inline")
    
  }
  const handlehover4=()=>{
    setDisplay4("inline")
    
  }

  const handleleave=()=>{
    setDisplay("none")
    
  }
  const handleleave1=()=>{
    setDisplay1("none")
    
  }
  const handleleave2=()=>{
    setDisplay2("none")
    
  }
  const handleleave3=()=>{
    setDisplay3("none")
    
  }
  const handleleave4=()=>{
    setDisplay4("none")
    
  }
  const [displayy,setDisplay] = useState("none")
  const [displayy1,setDisplay1] = useState("none")
  const [displayy2,setDisplay2] = useState("none")
  const [displayy3,setDisplay3] = useState("none")
  const [displayy4,setDisplay4] = useState("none")

// const handleclick=()=>{
//   if(dark=="white"){
//     setDark("black")
    
//   }else{
//     setDark("white")

//   }
// }
// const [dark,setDark]=useState("white")
  return (<>
    <div className='homepage' >

      <div className="hometext">
      <h1>Hi There,<br />I'm Gourav <span>Panchal</span></h1>
      <h4>I Am a Web Developer</h4>
      <button >About Me</button>
        <div className="link_social">
         
            <li onMouseEnter={handlehover} onMouseLeave={handleleave}>
              <a href="/"><img src="./icons/instagram.png"alt="instagram" /></a>
              <span className='span' style={{display:`${displayy}`}}>Instagram</span>
              </li>

            <li onMouseEnter={handlehover1} onMouseLeave={handleleave1}>
              <a href="/"><img src="./icons/snapchat.png" alt="snapchat" /></a> 
              <span className='span' style={{display:`${displayy1}`}}>Snapchat</span>
              </li>

            <li onMouseEnter={handlehover2} onMouseLeave={handleleave2}>
              <a href="/"><img src="./icons/whatsapp.png" alt="whatsapp" /></a>
               <span className='span' style={{display:`${displayy2}`}}>Whatsapp</span>
               </li>

            <li onMouseEnter={handlehover3} onMouseLeave={handleleave3}>
              <a href="/"><img src="./icons/telegram.png" alt="telegram" /></a>
               <span className='span' style={{display:`${displayy3}`}}>Telegram</span>
               </li>

            <li onMouseEnter={handlehover4} onMouseLeave={handleleave4}>
              
              <a href="/"><img src="./icons/email.png" alt="email" /></a> 
              <span className='span' style={{display:`${displayy4}`}}>Email</span>
              </li>
           
          
        </div>
      </div>
      <div className="homepic">
        <div className="pic">
          <img src="./icons/goru.png" alt="" />
        </div>
      </div>
    </div>
    <Quality/>
    <Project/>
    </>
  )
}

export default Home
