import React from 'react';
import "./scss/App.scss";
import Display from "./Display";

function App() {
    const windowHeight = window.screen.height;
  return (
      <div className="App">
          <div className="background"/>
          <div className="container" style={{maxWidth: 0.5625*windowHeight, height: windowHeight}}>
            <Display/>
        </div>
      </div>
  );
}

export default App;
