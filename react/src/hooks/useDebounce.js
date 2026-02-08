// import { useState,useEffect } from "react"

// function useDebounce({value,delay}) {
//     const [debouncedValue,setDebouncedValue]=useState("")
//     useEffect(()=>
//     {
//      const timer = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);
//     return () => clearTimeout(timer);
//     },[value,delay])
//   return debouncedValue;
// }

// export default useDebounce;

// import { useCallback } from "react";
// import {useRef,useEffect} from "react";

// function useDebounce(fn,delay) {
//   const timeoutRef=useRef(null)

//   useEffect(()=>{
//    return()=>{
//      if(timeoutRef.current){
//         clearTimeout(timeoutRef.current)
//      }}
//   },[]);
  
//   const debounce=useCallback(function(...args){ 
//         if (timeoutRef.current) clearTimeout(timeoutRef.current);
//         timeoutRef.current=setTimeout(()=>{
//           fn(...args);
//         },delay)
//   },[fn,delay])

//   return debounce;
// }

// export default useDebounce

import { useRef, useEffect, useCallback } from "react";

function useDebounce(fn, delay, options = { leading: false }) {
  const timeoutRef = useRef(null);
  const lastArgsRef = useRef();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const debouncedFn = useCallback((...args) => {
    lastArgsRef.current = args;

    // Leading edge call
    if (options.leading && !timeoutRef.current) {
      fn(...args);
    }

    // Clear previous timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Trailing edge call
    timeoutRef.current = setTimeout(() => {
      if (!options.leading) fn(...lastArgsRef.current);
      timeoutRef.current = null;
    }, delay);
  }, [fn, delay, options.leading]);

  return debouncedFn;
}

export default useDebounce;

