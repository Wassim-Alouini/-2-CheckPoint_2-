import image from './logo.svg';
import "./style.css"
import React from 'react';

import './App.css';

function App() {
  return (
    <div style={{border:"solid 1px black", maxWidth:"100vw"}}>
      <h1 className="title red"> My title </h1>
      <br/>
      <img src={image}></img>
      <br/>
      <img src={"/logo192.png"}></img>
    </div>
  );
}

export default App;
