import React, { useEffect, useState } from 'react';
import { Jutsu } from 'react-jutsu';
import generateName from 'sillyname';

import Clock from './Clock';

import { minutesSinceLastHour, log } from './utils';
import logo from './powerhourlogo.png';
import './App.css';

const DEFAULT_ROOM_NAME = 'SECRET_ROOM_666_NO_PASSWORD';

function App() {
  const name = generateName();
  const [showClock, setShowClock] = useState(false);
  const [drinkCount, setDrinkCount] = useState(0);

  useEffect(() => {
    // Counting resets every hour so we can keep "track" without a backend :)
    setDrinkCount(minutesSinceLastHour());

    // We need to fire a timer when the minute changes for the next time to get
    // everything in sync.
    const msTillNextMinute = 60000 - (Date.now() % 60000);

    setTimeout(() => {
      setShowClock(true);
      setDrinkCount((prevCount) => prevCount + 1);

      setInterval(() => {
        if (minutesSinceLastHour() === 0) {
          setDrinkCount(0);
        } else {
          setDrinkCount((prevCount) => prevCount + 1);
        }
      }, 60 * 1000);
    }, msTillNextMinute);
  }, []);

  return (
    <div className="App">
      <img src={logo} className="logo" alt="logo" />
      <h1 style={{ color: 'red' }}>Drinks: {drinkCount}</h1>
      <Clock show={showClock} />
      <div className="jitsi">
        <Jutsu
          roomName={DEFAULT_ROOM_NAME}
          userName={name}
          loadingComponent={<p>LOADING....</p>}
        />
      </div>
    </div>
  );
}

export default App;
