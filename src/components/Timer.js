import React from 'react';

const Timer = ({ timeLeft, isSession, isRunning, setIsRunning }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="timer">
      <h2 id="timer-label">{isSession ? 'Session' : 'Break'}</h2>
      <span id="time-left">{formatTime(timeLeft)}</span>
      <button id="start_stop" onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
    </div>
  );
};

export default Timer;
