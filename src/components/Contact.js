import React from 'react'

const Contact = () => {

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


  return (
    <div className='contact_page'>

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
                <input type="text" name="name" id="name" placeholder='Your Name' required autoFocus/>
                <input type="email" name="email" id="email" placeholder='Your Email' required />
                <input type="number" name="number" id="number" placeholder='Your Phone' required />
                <input type="text" name="subject" id="subject" placeholder='Subject' required />
                <input type="text" name="message" id="message" placeholder='Write your message' required />
                
            </div>

        </div>

        <button className='address_btn'>Submit</button>
      
    </div>
  )
}

export default Contact
