import React, { useEffect, useState} from "react";
import ganpatiImage from '../../assets/ganpati.png';
import '../../App.css'; 

const Lagna = () => {
    const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const weddingDate = new Date("2025-02-25T17:00:00+05:30"); // 25th Feb 2025, 5 PM IST
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = weddingDate - now;
      
      if (timeDifference <= 0) {
        clearInterval(interval);
        setTimeLeft("The wedding has started!");
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
    return (
        <div className="App">
    <h1>Tirthrajsinh & Bhavyataba's Wedding</h1>
    <img src={ganpatiImage} alt="Ganpati" className="ganpati-image" />
    <h2>Wedding Countdown</h2>
    <p>{timeLeft}</p>

    <div className="buttons">
      <button onClick={() => window.open('https://maps.app.goo.gl/piwf9ZyW73FJ778R6', '_blank')}>Home Location</button>
      <button onClick={() => window.open('https://maps.app.goo.gl/8gZBohaBnff5u8E78', '_blank')}>Venue Location</button>
    </div>
  </div>
    );
}
export default Lagna;