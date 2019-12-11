import React from 'react';
import "./scss/App.scss";
import Display from "./Display";

function App() {
    console.log(window.screen.height);
  return (
      <div className="App" >
          <div className="background"/>
          <div className="container" style={{maxWidth: 0.5625*window.screen.height}}>
            <Display/>
        </div>
      </div>
  );
}

export default App;
