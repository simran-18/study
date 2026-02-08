import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const AnimateProgessBar = () => {
    const [width,setWidth]=useState(0)
    useEffect(()=>{
      let intervalId;
      intervalId=setInterval(()=>{
        setWidth((prev)=>prev>100?0:prev+10)
      },1000);

      return () => clearInterval(intervalId);
    },[width])
  return (
    <div style={{
        backgroundColor:'#C4C4C4',
        height:'20px',
        width:'200px',
    }}>
        <div
         style={{
           width:`${width}%`,
           height:"100%",
           backgroundColor:"green",
           transition: "width 0.3s ease",
         }}>

        </div>
    </div>
  )
}

export default AnimateProgessBar