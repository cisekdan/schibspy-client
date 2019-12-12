import React from 'react';
import "./scss/App.scss";
import Display from "./Display";
import Video from './components/Video';

function App() {
    const { screen: { height: windowHeight } } = window;
    const ratio = 0.5625;
  return (
      <div className="App">
          <div className="background"/>
          <div className="container" style={{maxWidth: ratio * windowHeight, height: windowHeight}}>
            <Display/>
        </div>
        <Video hidden />
      </div>
  );
}

export default App;
