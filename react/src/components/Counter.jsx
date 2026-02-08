import { useRef, useState, useEffect } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);
  function onStart() {
    if (intervalRef.current) return;
    setCount(0);
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }
  function onStop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setCount(0);
  }
  function onResume() {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }
  function onPause() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
  return (
    <div>
      <h1>Count is ::: {count}</h1>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <button onClick={onResume}>Resume</button>
      <button onClick={onPause}>Pause</button>
    </div>
  );
}

export default Counter;
