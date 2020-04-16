import React, { useEffect, useState } from 'react';
import { Jutsu } from 'react-jutsu';
import generateName from 'sillyname';

import Clock from './Clock';

import logo from './powerhourlogo.png';
import './App.css';

const DEFAULT_ROOM_NAME = 'SECRET_ROOM_666_NO_PASSWORD';

function App() {
  const name = generateName();
  const [showClock, setShowClock] = useState(false);

  useEffect(() => {
    const msTillNextMinute = 60000 - (Date.now() % 60000);
    setTimeout(() => setShowClock(true), msTillNextMinute);
  }, []);

  return (
    <div className="App">
      <img src={logo} className="logo" alt="logo" />
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
