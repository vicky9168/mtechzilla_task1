import "./Timer.css"
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(1500); // 25 minutes in seconds
  const [breakTime, setBreakTime] = useState(false); 
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  // Start the timer
  function handleStart() {
    setIsActive(true);
    setIsPaused(false);
    if(!breakTime){
      setBreakTime(false);
      }
  }
  function handleStart1() {
    setIsActive(true);
    setIsPaused(false);
    if(!breakTime){
    setBreakTime(false);
    }else{
      setBreakTime(true);
    }
  }
  
  // Pause the timer
  function handlePause() {
    setIsActive(false);
    setIsPaused(true);
    
  }
  
  // Reset the timer
  function handleReset() {
    setIsActive(false);
    setIsPaused(false);
    if(breakTime){
    setSeconds(300);
      }else{
        setSeconds(1500);
  
      }
  }
  
  // Count down the seconds
  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0 && !isPaused) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, isPaused]);
  
  // Start the break timer when the 25-minute timer is completed
  useEffect(() => {
    if (seconds === 0) {
      setSeconds(300); 
      setBreakTime(true)
      setIsActive(true);

    }
  }, [seconds]);
  
  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  
  return (
    <div className="main-div">
    <section className="sec-1">
    <h1>Pomodoro</h1>
    <p>25 minutes for work time & <br /> 5 minutes for break</p>
    {!breakTime ?<h3>Work Time</h3>:<h3>Break Time</h3>}
      <h2>{formatTime(seconds)}</h2>
      <div className="btns">
      {!isActive && !isPaused && <button className="btn1" onClick={handleStart}>Start</button>}
      {isActive && <button className="btn1" onClick={handlePause} >Pause</button>}
      {isPaused && <button className="btn1" onClick={handleStart1} >Resume</button>}
      <button onClick={handleReset} className="btn1">Reset</button>
      </div>
      </section>
    </div>
  );
}

export default Timer;


