// import { useEffect } from "react";
// import { useLayoutEffect } from "react";
// import { useRef } from "react";
// import { useState } from "react";

// function Homepage() {
//   //   const [count, setCount] = useState( Number(localStorage.getItem("count"))  || 0);
//   const [count, setCount] = useState(0);
//   const [timerStart, setTimerStart] = useState(false);
//   const timeRef = useRef(null);

//   useLayoutEffect(() => {
//     const timer = Number(localStorage.getItem("count")) || 0;
//     setCount(timer);
//     setTimerStart(true);
//   }, []);

//   useEffect(() => {
//     if (timerStart) {
//       localStorage.setItem("count", count);
//       timeRef.current = setTimeout(() => {
//         setCount((count) => count + 1);
//       }, 1000);
//     }
//     return () => {
//       clearTimeout(timeRef.current);
//     };
//   }, [count]);

  
//   return (
//     <div style={{ paddingLeft: "10rem" }}>
//       <p>Homepage</p>
//       <h2>Count is :: {count}</h2>
//     </div>
//   );
// }

// export default Homepage;

import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function Homepage() {
  const [count, setCount] = useState(()=> Number(localStorage.getItem("count"))  || 0);
  const timeRef = useRef(null);

  useEffect(() => { 
      localStorage.setItem("count", count);
      timeRef.current = setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    return () => {
      clearTimeout(timeRef.current);
    };
  }, [count]);

  
  return (
    <div style={{ paddingLeft: "10rem" }}>
      <p>Homepage</p>
      <h2>Count is :: {count}</h2>
    </div>
  );
}

export default Homepage;
