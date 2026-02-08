import { useEffect, useRef, useState } from "react";
function TrafficLight() {
  const [activeLight, setActiveLight] = useState(0);

  const lights = ["green", "yellow", "red"];
  const durations = {
    green: 3000,
    yellow: 500,
    red: 4000,
  };
  useEffect(() => {
    let timeout = setTimeout(() => {
      setActiveLight((prev) => {
        const newIndex = (prev + 1) % lights.length;
        return newIndex;
      });
    }, durations?.[lights[activeLight]]);
    return () => clearTimeout(timeout);
  }, [activeLight]);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {lights.map((light, index) => {
          return (
            <div
              key={index}
              style={{
                padding: "20px",
                backgroundColor: `${lights[activeLight] === light ? light : "gray"}`,
                borderRadius: "9999px",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default TrafficLight;
