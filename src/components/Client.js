import React,{useState} from 'react'

const Client = () => {
  const [source,setSource]=useState(1);


    const imgsrc={
        src1:`./images/frontend/${source}.png`,
       
    }

    const handlepic =()=>{
         setSource(source +1)
         if(source>=9){
            setSource(1)
         }

    }
   
  return (
    <div className='allpic' >
        
        <img src={imgsrc.src1} alt="" onClick={handlepic} />
        

      

        
      
    </div>
  )
}

export default Client
