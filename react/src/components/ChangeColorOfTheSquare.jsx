import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react'
import { useState } from 'react'
const COUNT=3
function ChangeColorOfTheSquare() {
  const [stack,setStack]=useState([]);
  const [unwinding,setUnwinding]=useState(false);
  const timeRef=useRef(null)
  function generateCircles(){
    const result=[]
   for(let i=0;i<COUNT;i++){
     result.push(<div className={`${stack.includes(i)?'square active':'square'}`} onClick={()=>{
        if(!unwinding && !stack.includes(i)){
            setStack((prev)=>[...prev,i])}
        }
    }>{i}</div>)
   }
   return result;
  }
  useEffect(()=>{
    if(COUNT===stack.length){
       setUnwinding(true)
    }
    if(unwinding && stack.length===0){
        setUnwinding(false)
    }
    if(unwinding){
        timeRef.current=setTimeout(()=>{
           const copied=[...stack];
           copied.pop()
           setStack(copied)
        },1000)
    }
  },[unwinding,stack])
  return (
    <div style={{
        border:'1px solid black',
        display:'flex',
        flexDirection:'column',
        gap:'10px',
        padding:'30px',
        width:'300px',
        justifyContent:'center',
        alignItems:'center'
    }}>
       {generateCircles()}
    </div>
  )
}

export default ChangeColorOfTheSquare