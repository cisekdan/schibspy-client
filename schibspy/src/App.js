import React from 'react';
import "./App.scss";
import Registration from "./Registration";
import Timer from "./Timer.js";
import Quiz from "./Quiz";

function App() {
  const userRegistered = true;
  const timerOn = false;
  const gameInProgress = true;

  return (
    <div className="App">
  <div className="container">
    <div className="content">
    {!userRegistered && <Registration/>}
    {timerOn && <Timer/>}
    {gameInProgress && <Quiz/>}
    </div>
  </div>
    </div>
  );
}

export default App;
