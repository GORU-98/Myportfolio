import React from 'react'
import Langdata from "./Langdata"
const Lang = (props) => {
 
  return (
    <div className='lang_page'  style={{color:props.color , marginTop:props.margin}}>

        {Langdata.map((lang)=>{

     return   <div className="lang_card" key={lang.id}>

            <div className="lang_logo">
                <img src={lang.src} alt="" />
            </div>   

               <div className="l_data">
                    <h2>{lang.title}</h2>
                    <p>{lang.desc}</p>
                    <div className="l_bar" >
                        <div className="bar" style={{width:`${lang.width}%`}}>
                            <div className="bar_per" >
                              {lang.width}%
                            </div>
                        </div>
                    </div>
                   
                </div> 
        </div>
        })}
       
    </div>
  )
}

export default Lang
