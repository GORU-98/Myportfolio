import React, {  useState } from 'react'

const All = () => {
    const [source,setSource]=useState(4);
    
    
    const imgsrc={
        src1:`./images/all/${source}.png`,
        
      }
      
      const handlepic =()=>{
        setSource(source +1)
        if(source>=22){
          setSource(1)
        }
        // document.body.style.padding="0%";
        // document.body.style.zIndex="-10";
        // document.body.style.overflow="hidden";
        // document.body.style.maxHeight="100vw";
        // document.body.style.maxWidth="100vh";
        // document.body.style.display="grid";
        // document.body.style.placeItems="center";

        // setProject({
        //   width:"100vw",
        //   height:"100vh",
        //   position:"absolute",
        //   top:0,
        //   bottom:0,
        //   left:0,
        //   right:0,
        //   margin:0,
        //   padding:0,
        //   marginTop:"3rem",
        //   overflow:"hidden",
        //   objectFit:"cover",
        //   alignContent:"center",
        //   objectPosition:"center",
        //   marginLeft:"auto",
        //   marginRight:"auto",
        //   zIndex:"200"

        //    })
        
      }
      
   
  return (
    <>
    <div className='allpic' >
        
        <img src={imgsrc.src1} alt="" onClick={handlepic}  />

      

        
      
        {/* <div className="bgpic">g</div> */}
    </div>
        </>
  )
}

export default All
