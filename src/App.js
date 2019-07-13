import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Welcom, Avatar,Clock } from './common';
import {Counter} from './counter';
import LifeCycle from './LifeCycle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Clock/>
            <Avatar/> */}
         {/* <Welcom name="Fatima" gender="female"/>
         <Welcom name="Ali Haider" gender="male"/>
         <Welcom name="Ali Haider"/> */}
         {/* <input type="text" value="" /> */}
            {/* <Avatar/> */}
           <Counter/>
        {/* <Welcom name="Hira" gender="female"/>
        <Welcom name="hatal"/>
        <LifeCycle /> */}
      </header>
    </div>
  );
}

export default App;
