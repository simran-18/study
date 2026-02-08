import { useCallback } from "react";
import { useState } from "react"

function useToggle(arr,index) {
  const [currentIndex,setCurrentIndex]=useState(index);

  const toggle=useCallback(()=>{
       setCurrentIndex((prevIndex)=>prevIndex>=arr.length-1?0:prevIndex+1);
  },[arr])
  
  return [toggle,currentIndex]
}

export default useToggle