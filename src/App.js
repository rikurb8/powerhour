import React from 'react';
import { Jutsu } from 'react-jutsu';
import generateName from 'sillyname';

import logo from './powerhourlogo.png';
import './App.css';

const DEFAULT_ROOM_NAME = 'SECRET_ROOM_666_NO_PASSWORD';

function App() {
  const name = generateName();

  return (
    <div className="App">
      <img src={logo} className="logo" alt="logo" />
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
