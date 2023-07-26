import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import {useState, useReducer } from 'react'
import reducer from "./reducer"
const Appcontext = React.createContext()

let initialState ={

    color:"",
    
};

const Mode = ({children}) => {
    const color = ["#FFFACD","#FA8099","#808080","#00CED1"] ;
    const [display,setDisplay] = useState("none")
    // const [animate,setAnimate] = useState("")
    // const handlebutton = useRef()
    const handlebutton1 = useRef()
    const handlebutton2 = useRef()
    const handlebutton3 = useRef()
    const handlebutton4= useRef()
    const[state,dispatch] =useReducer(reducer,initialState);

    useEffect(()=>{
        document.body.style.backgroundColor=state.color
        setDisplay("none")
        // handlebutton.current.classList.remove("animate")
       
    },[state.color])

    const handleDisplay =()=>{
        if(display==="none"){
            setDisplay("grid")
            // handlebutton.current.classList.add("animate")
            handlebutton1.current.classList.add("animate")
            handlebutton2.current.classList.add("animate")
            handlebutton3.current.classList.add("animate")
            handlebutton4.current.classList.add("animate")
        }else{
            setDisplay("none")
            // handlebutton.current.classList.remove("animate")
            handlebutton1.current.classList.remove("animate")
            handlebutton2.current.classList.remove("animate")
            handlebutton3.current.classList.remove("animate")
            handlebutton4.current.classList.remove("animate")

        }
    }
    const handleMode =()=>{
        dispatch({
            type:"mode",
            payload:{
                color:color[0]
            }
           })
        
        setDisplay("none")
    }
    const handleMode1 =()=>{
        dispatch({
            type:"mode",
            payload:{
                color:color[1]
            }
           })
    }
    const handleMode2 =()=>{
        dispatch({
            type:"mode",
            payload:{
                color:color[2]
            }
           })
    }
    const handleMode3 =()=>{
        dispatch({
            type:"mode",
            payload:{
                color:color[3]
            }
           })
    }

    const hoverbtn= useRef()
    const hoverbtn1= useRef()
    const hoverbtn2= useRef()
    const hoverbtn3= useRef()
    const handleHover =()=>{
        hoverbtn.current.style.display="block"
    
    }
    const handleHover1 =()=>{
        
        hoverbtn1.current.style.display="block"
      
    }
    const handleHover2 =()=>{
       hoverbtn2.current.style.display="block"
        }
    const handleHover3 =()=>{
        hoverbtn3.current.style.display="block"
    }
    const handleLeave =()=>{
        hoverbtn.current.style.display="none"
    
    }
    const handleLeave1 =()=>{
    
        hoverbtn1.current.style.display="none"
        
    }
    const handleLeave2 =()=>{
       
        hoverbtn2.current.style.display="none"
    
    }
    const handleLeave3 =()=>{
        hoverbtn3.current.style.display="none"
    }
    
    
    // const [hover,setHover] = useState("none")
    // console.log(modeColor)
    // console.log(state)
  return (
    <Appcontext.Provider value={{...state}}>
    
    <div className='mode'  ><img src="./icons/filter.png" alt=""  onClick={handleDisplay}/></div>
        
        <div className="color"   style={{display:`${display}`}}>

        <div className="yellow" ref={handlebutton1} onClick={handleMode} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <div className="colorMod" ref={hoverbtn}  style={{backgroundColor:color[0]}} >Yellow Mode</div>
        </div>
        <div className="red"  ref={handlebutton2} onClick={handleMode1} onMouseEnter={handleHover1} onMouseLeave={handleLeave1}>
        <div className="colorMod"  ref={hoverbtn1} style={{backgroundColor:color[1]}} >Pink Mode</div>
        </div>
        <div className="black"  ref={handlebutton3} onClick={handleMode2} onMouseEnter={handleHover2} onMouseLeave={handleLeave2}>
        <div className="colorMod"  ref={hoverbtn2} style={{backgroundColor:color[2]}} >Dark Mode</div>
        </div>
        <div className="blue"  ref={handlebutton4} onClick={handleMode3} onMouseEnter={handleHover3} onMouseLeave={handleLeave3}>
        <div className="colorMod"  ref={hoverbtn3} style={{backgroundColor:color[3]}} >Blue Mode</div>
        </div>
        {/* <div className="red"   
        onClick={()=>{ 
            //  setMode(color[1])
            dispatch({
                type:"mode",
                payload:{
                    color:"brown"
                }
               })
         document.body.style.backgroundColor=state.color}} >
            R</div>
        <div className="black"   
        onClick={()=>{
            //  setMode(color[2])
        //  document.body.style.backgroundColor=color[2] 
        }}>
            B</div>
        <div className="blue"   
        onClick={()=>{ 
            //  setMode(color[3])
         document.body.style.backgroundColor=color[3] }} >
            S</div> */}
        {/* <div className="yellow"   onClick={()=>{setMod(color[0]) 
            document.body.style.backgroundColor=`${modeColor}`}}>Y</div>
        <div className="red"   onClick={()=>{setMod(color[1]) 
         document.body.style.backgroundColor=`${modeColor}` }} >R</div>
        <div className="black"   onClick={()=>{setMod(color[2]) 
         document.body.style.backgroundColor=`${modeColor}` }} >B</div>
        <div className="blue"   onClick={()=>{setMod(color[3]) 
         document.body.style.backgroundColor=`${modeColor}` }} >S</div> */}
        </div>
        {children}
        </Appcontext.Provider>

  )
}

export {Appcontext,Mode}
