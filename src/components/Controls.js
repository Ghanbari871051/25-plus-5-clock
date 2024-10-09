import React from 'react';

const Controls = ({ breakLength, sessionLength, setBreakLength, setSessionLength, reset }) => {
  return (
    <div className="controls">
      <div className="length-control">
        <h2 id="break-label">Break Length</h2>
        <button id="break-decrement" onClick={() => breakLength > 1 && setBreakLength(breakLength - 1)}>-</button>
        <span id="break-length">{breakLength}</span>
        <button id="break-increment" onClick={() => breakLength < 60 && setBreakLength(breakLength + 1)}>+</button>
      </div>
      <div className="length-control">
        <h2 id="session-label">Session Length</h2>
        <button id="session-decrement" onClick={() => sessionLength > 1 && setSessionLength(sessionLength - 1)}>-</button>
        <span id="session-length">{sessionLength}</span>
        <button id="session-increment" onClick={() => sessionLength < 60 && setSessionLength(sessionLength + 1)}>+</button>
      </div>
      <button id="reset" onClick={reset}>Reset</button>
    </div>
  );
};

export default Controls;
