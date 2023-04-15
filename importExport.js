//App.js
// export ==== import {Component}
//export component ===== import Component
import React from 'react';
import  Display  from './Display'
function App() {
  return (
    <div>
      <Display/>
    </div>
  );
}

export default App;


//Display.js
import React from 'react';

function Display() {
  return (
    <div>
      <h1> exported display file </h1>
    </div>
  );
}
//==========================================================================
export default Display;

// export ==== import {Component}
///app.js
// export ==== import {Component}
//export component ===== import Component
import React from 'react';
import  { Display } from './Display';
function App() {
  return (
    <div>
      <Display/>
    </div>
  );
}

export default App;

//Display.js
import React from 'react';

export const Display = ()=> {
  return (
    <div>
      <h1> exported display file </h1>
    </div>
  );
}

