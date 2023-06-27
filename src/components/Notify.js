import React from 'react'
// import { useState } from 'react'

const Notify = (props) => {
    
    // const [show,setShow] = useState("none")
    
    return (
      <>
    <div className={`alert ${props.show ? "activeDis" : "inactive"}`} >
      <div className="notify">
     {props.msg}                                                                        
      </div>
      {/* <button  className="alert_btn" onClick={()=>{document.querySelector(".alert").classList
      .add("inactive")}}>OK</button> */}
    </div>
    </>
  )
}

export default Notify
