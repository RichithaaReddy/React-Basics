//App.js

import React, { Component } from 'react';
import Display from './Display'
export default class App extends Component {
  state = {
    namee: "abc"
  }

 click=()=>{
   if(this.state.namee ==="abc"){
    this.setState({namee:'def'})
   }
   else{
    this.setState({namee:'abc'})
   }
 }

  render() {
    return (
      <div>
        //will render the display the component and passing prop value
        <Display n={this.state.namee}  /> 
         //current state
        <p>{this.state.namee}</p>
        <button onClick={this.click}>Change Name</button>
      </div>
    );
  }
}
//display.js

import React, { Component } from 'react';

export default class Display extends Component {
  render() {
    return (
      <div>
      //prop value from app.js
        <h2>{this.props.n} DISPLAY COMPONENT </h2> 
      </div>
    );
  }
}


// output
// abc DISPLAY COMPONENT
// abc

// Change Name
