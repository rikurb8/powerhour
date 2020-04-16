import React from 'react';
import arrow from './arrow.png';

function Clock({ show }) {
  return (
    <div className="clock-container rotate">
      <img src={arrow} className="clock-hand" />
    </div>
  );
}

export default Clock;
