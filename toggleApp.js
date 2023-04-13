//toggle
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    namee: "abc"
  }

 handleClick=()=>{
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
        <p>{this.state.namee}</p>
        <button onClick={this.handleClick}>Change Name</button>
      </div>
    );
  }
}
