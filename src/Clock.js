import React from 'react';

function Clock({ show }) {
  return (
    <div className="clock-container">
      {show ? (
        <React.Fragment>
          <div class="line"></div>
          <div class="circle0 circle"></div>

          <div class="circle1 circle"></div>
          <div class="circle2 circle"></div>
          <div class="circle3 circle"></div>
          <div class="circle4 circle"></div>
          <div class="circle5 circle"></div>
          <div class="circle6 circle"></div>
        </React.Fragment>
      ) : (
        <h1>Get ready, next round starting soon...</h1>
      )}
    </div>
  );
}

export default Clock;
