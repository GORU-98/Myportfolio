import React, {  useState } from 'react'

const All = (props) => {
    const [source,setSource]=useState(4);
    
    
    const imgsrc={
        src1:`./images/all/${source}.png`,
        
      }
      
      const handlepic =()=>{
        setSource(source +1)
        if(source>=22){
          setSource(1)
        }
      
        
      }
      const {color} = props;

   
  return (
    <>
    <div className='allpic' style={{color:color}}>
        
        <img src={imgsrc.src1} alt="" onClick={handlepic}  />

      

        
      
        {/* <div className="bgpic">g</div> */}
    </div>
        </>
  )
}

export default All
