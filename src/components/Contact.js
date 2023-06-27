import React from 'react'
// import { useReducer } from 'react';
import { useState,useEffect } from 'react'
import Notify from './Notify';
// import reducer from './reducer';

const Contact = (props) => {
  

    const address=[
        {
            id:1,
            imgsrc:"./icons/home-icon-silhouette.png",
            title:"Address",
            desc:"Jind Haryana"

        },
        {
            id:2,
            imgsrc:"./icons/gmail.png",
            title:"Address",
            desc:"Jind Haryana"

        },
        {
            id:3,
            imgsrc:"./icons/phone-call.png",
            title:"Address",
            desc:"Jind Haryana"

        },
    ]
      const [mess,setMess] = useState({name:"",email:"",number:"",message:"",subject:""});

      const sendMessage = async (e)=>{
        const req = await fetch("http://localhost:9000/contact",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(
               {...mess}
            )
        })
        
        const response = await req.json();
        setMsg(response)
        if(response.status===200){
          Hide(true)
          document.body.style.overflow="hidden"
        }else{
          Hide(false)
          document.body.style.overflow="scroll"
        }
        
         
        setMess({name:"",email:"",number:"",message:"",subject:""})

    }
    const [msg,setMsg] = useState({})
    const [show,Hide] = useState(false)

    useEffect(()=>{
setTimeout(() => {
  Hide(false)
  document.body.style.overflow="scroll"
}, 4000);
  },[show])

const handleMess =(e)=>{
    setMess({...mess,[e.target.name]:e.target.value})
}


  return (
    <>
    
  <div className="alertcomp" >
     <Notify msg={msg.message} show={show}/> 
  </div>
    <div className='contact_page' style={{opacity:`${show ? 0.1 : 1}`, height:props.height}}>

        {/* ist section */}
        <div className="contact_title">
            <h2>Contact Me</h2>
            <h1>I Want To Hear From You</h1>
            <p>Please fill out the form on this section to contact with me.I will give you a honourable reply regarding your query as early as possible.</p>
        </div>

      {/* 2nd section */}
        <div className="contact_form">
<div className="c_address">


           { address.map((add_data)=>{
           return  <div className="c_add" key={add_data.id}>

           <div className="c_icon">
               <img src={add_data.imgsrc} alt="" />
            </div>
            <div className="address_data">
               <h3>{add_data.title}</h3>
               <p>{add_data.desc}</p>
           </div>
            </div>

           })}
           </div>

            <div className="c_form">
                <input type="text" name="name" id="name" value={mess.name} placeholder='Your Name' required onChange={handleMess} autoFocus/>
                <input type="email" name="email" id="email" value={mess.email} placeholder='Your Email' required onChange={handleMess} />
                <input type="number" name="number" id="number" value={mess.number}placeholder='Your Phone' required onChange={handleMess} />
                <input type="text" name="subject" id="subject" value={mess.subject}placeholder='Subject' required onChange={handleMess} />
                <input type="text" name="message" id="message" value={mess.message}placeholder='Write your message' required onChange={handleMess} />
                
            </div>

        </div>

        <button className='address_btn' disabled={!mess.name || !mess.email || !mess.message || !mess.number || !mess.subject} onClick={sendMessage}>Submit</button>
      
    </div>
    </>
  )
}

export default Contact
