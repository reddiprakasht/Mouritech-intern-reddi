import React, { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  // useEffect to run code after the component renders
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, []); // Empty dependency array means it runs only once when the component mounts

  return <h1>Timer: {count} seconds</h1>;
};

export default Timer;
