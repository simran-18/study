import React, { useEffect, useState } from "react";

const TOTAL_BARS = 5;

function AnimateMultipleBar() {
  const [progressBars, setProgressBars] = useState(
    new Array(TOTAL_BARS).fill(0)
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= TOTAL_BARS) return;

    const intervalId = setInterval(() => {
      setProgressBars(prev => {
        const updated = [...prev];

        if (updated[currentIndex] >= 100) {
          clearInterval(intervalId);
          setCurrentIndex(i => i + 1);
        } else {
          updated[currentIndex] += 1;
        }

        return updated;
      });
    }, 20);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div>
      {progressBars.map((value, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#C4C4C4",
            height: "20px",
            width: "200px",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              width: `${value}%`,
              height: "100%",
              backgroundColor: "green",
              transition: "width 0.05s linear",
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default AnimateMultipleBar;
