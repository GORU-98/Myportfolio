import React ,{useState}from 'react'

const Server = () => {
  const [source,setSource]=useState(1);


    const imgsrc={
        src1:`./images/backend/${source}.png`,
       
    }

    const handlepic =()=>{
         setSource(source +1)
         if(source>=6){
            setSource(1)
         }

    }
   
  return (
    <div className='allpic' >
        
        <img src={imgsrc.src1} alt="" onClick={handlepic} />
        

      

        
      
    </div>
  )
}

export default Server
