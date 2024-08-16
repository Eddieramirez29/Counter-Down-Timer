import { useEffect, useState } from 'react';
import hills from "./assets/pattern-hills.svg";
import stars from "./assets/bg-stars.svg";
import facebook from "./assets/icon-facebook.svg";
import instagram from "./assets/icon-instagram.svg";
import pinterest from "./assets/icon-pinterest.svg";
import "./index.css";

function CounterDown()
{
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

useEffect(() => {
    const targetDate = new Date("2024-12-31T23:59:59").getTime();

    const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0)
    {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
    }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
}, []);

return (
    <>
    <h1 className="title">WE´RE LAUNCHING SOON</h1>
    <div className="countdown">
        <div className="countdown-item">{timeLeft.days} </div>
        <div className="countdown-item">{timeLeft.hours} </div>
        <div className="countdown-item">{timeLeft.minutes}</div>
        <div className="countdown-item">{timeLeft.seconds}</div>
    </div>

    <div className='names'>
        <span className='names-item'>DÍAS</span>
        <span className='names-item'>HORAS</span>
        <span className='names-item'>MINUTOS</span>
        <span className='names-item'>SEGUNDOS</span>
    </div>
    
    <img className="hills" src={hills} alt="Hills" />
    <img className="stars" src={stars} alt="Stars" />
    <div className="icon-container">
        <img className="facebook" src={facebook} alt="Facebook" />
        <img className="pinterest" src={pinterest} alt="Pinterest" />
        <img className="instagram" src={instagram} alt="Instagram" />
    </div>
    </>
);
}

export default CounterDown;