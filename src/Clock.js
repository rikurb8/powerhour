import React from 'react';
import arrow from './arrow.png';

function Clock({ show }) {
  return show ? (
    <div className="clock-container rotate">
      <img src={arrow} className="clock-hand" />
    </div>
  ) : (
    <div className="clock-wait-container">
      <h1>Please wait patiently, the next round is about to start. 🙃</h1>
    </div>
  );
}

export default Clock;
