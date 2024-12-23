import React, { useState, useEffect } from "react";
import "./Countdown.css";

function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      {Object.keys(timeLeft).length ? (
        <>
          <div>{timeLeft.days} Days</div>
          <div>{timeLeft.hours} Hours</div>
          <div>{timeLeft.minutes} Minutes</div>
          <div>{timeLeft.seconds} Seconds</div>
        </>
      ) : ( 
        <div>It's Time!</div>
      )}
    </div>
  );
}

export default Countdown;
