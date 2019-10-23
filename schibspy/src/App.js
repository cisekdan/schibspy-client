import React from 'react';
import "./App.scss";
import Registration from "./Registration";
import Timer from "./Timer.js";
import Quiz from "./Quiz";

function App() {
  const userRegistered = false;
  const timerOn = false;
  const gameInProgress = false;

  return (
    <div className="App">
      <div className="container">
        {!userRegistered && <Registration/>}
        {timerOn && <Timer/>}
        {gameInProgress && <Quiz/>}
      </div>
    </div>
  );
}

export default App;
