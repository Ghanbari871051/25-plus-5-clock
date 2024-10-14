import React, { useState, useEffect, useRef } from 'react';
import Timer from './components/Timer';
import Controls from './components/Controls';
import './styles.css';

const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isSession, setIsSession] = useState(true);
  const audioRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 0) {
            audioRef.current.play();
            if (isSession) {
              setIsSession(false);
              return breakLength * 60;
            } else {
              setIsSession(true);
              return sessionLength * 60;
            }
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, breakLength, sessionLength, isSession]);

  const reset = () => {
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setIsRunning(false);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <div className="container">
      <h1>Sedighe Ghanbary</h1>
      <h1>25 + 5 Clock</h1>
      <Controls
        breakLength={breakLength}
        sessionLength={sessionLength}
        setBreakLength={setBreakLength}
        setSessionLength={setSessionLength}
        reset={reset}
      />
      <Timer
        timeLeft={timeLeft}
        isSession={isSession}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
      />
      <audio id="beep" ref={audioRef} src="beep.mp3" />
    </div>
  );
};

export default App;
