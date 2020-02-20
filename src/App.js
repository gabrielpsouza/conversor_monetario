import React from 'react';
import './App.css';

import Conversor from "./component/Conversor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      </header>
    </div>
  );
}

export default App;
