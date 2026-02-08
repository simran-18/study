import { useEffect } from 'react';
import {useState,useRef} from 'react'

function StopWatch() {
  const [time,setTime]=useState(0)
  const [isRunning,setIsRunning]=useState(false)
  const timeRef=useRef(null)
  useEffect(()=>{
    if (!isRunning) return;
     timeRef.current=setTimeout(()=>{
       setTime(time=>time+1);
    },1000)
   
  return ()=>{
    if(timeRef.current){
        clearTimeout(timeRef.current)
    }}
  },[time,isRunning]);
  function handleStartClick(){
    setIsRunning(prev=>!prev)
  }
  function handleClick(){
    clearTimeout(timeRef.current)
    timeRef.current=null;
    setTime(0);
    setIsRunning(false) 
  }
  const hours = String(Math.floor(time / 3600)).padStart(2, "0");
  const mins = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const secs = String(time % 60).padStart(2, "0");

  return (
    <div style={{padding:"1rem"}}>
        <div style={{display:"flex",flexDirection:"row",gap:"0.75rem"}}>
            <button onClick={handleStartClick}>{!isRunning?"Start":"Pause"}</button>
            <button onClick={handleClick}>Reset</button>
        </div>
        <h2>{hours}:{mins}:{secs}</h2>
    </div>
  )
}

export default StopWatch