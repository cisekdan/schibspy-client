import React from 'react';
import "./scss/App.scss";
import Display from "./Display";

function App() {
  return (
      <div className="App">
        <div className="container">
          <Display/>
          <div className="background"/>
        </div>
      </div>
  );
}

export default App;
