import React, {useEffect, useState} from 'react';
import "./scss/App.scss";
import Display from "./Display";

function App() {
    const [windowHeight, setWindowHeight] = useState(null);
    useEffect(() => {
        setWindowHeight(window.screen.height)
    }, []);
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
