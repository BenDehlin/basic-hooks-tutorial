import React, {Component} from 'react'

class ClassCount extends Component{
  constructor(props){
    super(props)
    this.state ={
      count: 0
    }
  }

  incrementCount = (num) => {
    this.setState({count: count + num})
  }

  decrementCount = (num) => {
    this.setState({count: count + num})
  }

  render(){
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => incrementCount(1)}>+1</button>
        <button onClick={() => decrementCount(1)}>-1</button>
        <button onClick={() => incrementCount(5)}>+5</button>
        <button onClick={() => decrementCount(5)}>-5</button>
      </div>
    )
  }
}

export default ClassCount