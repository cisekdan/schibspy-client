import React from 'react';
import "./scss/App.scss";
import Display from "./Display";

function App() {
    const { screen: { height: windowHeight } } = window;
    const ratio = 0.5625;
  return (
      <div className="App">
          <div className="background"/>
          <div className="container" style={{maxWidth: ratio * windowHeight, height: windowHeight}}>
            <Display/>
        </div>
      </div>
  );
}

export default App;
