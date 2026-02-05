import React, { Component } from 'react'

class Counter extends Component {

    constructor(){
        this.state = {
            count : 0,
        };
    }

  render() {
    return (
      <div>
        <h1>This is Class Components</h1>
        <h2>Count : {this.state.count}</h2>
        <button onClick={()=>this.setState({count :this.state.count + 1})}>increment</button>
        <button onClick={()=>this.setState({count :this.state.count - 1})}>decrement</button>
      </div>
    )
  }
}

export default Counter
