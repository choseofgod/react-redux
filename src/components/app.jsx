import React, {Component} from "react";

export default class App extends Component {

  state = {
    count : 0
  }

  increment = () => {
    let {count} = this.state
    const {value} = this.value
    count = value*1 + count
    this.setState({count})
  }
  decrement = () => {
    let {count} = this.state
    const {value} = this.value
    count = count - value * 1
    this.setState({count})
  }
  incrementOdd = () => {
    const {value} = this.value
    let {count} = this.state
    if(count%2 === 1){
      this.setState({count:count + value * 1})
    }
  }
  incrementAsync = () => {
    const {value} = this.value
    let {count} = this.state
    setTimeout(() => {
      this.setState({count: count + value * 1})
    },1000)

  }

  render() {
    const {count} = this.state

    return (
      <div>
        <p>Click {count} times</p>
        <div>
          <select ref={value => this.value = value}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.incrementOdd}>increment if odd</button>
          <button onClick={this.incrementAsync}>increment async</button>
        </div>
      </div>
    )
  }
}