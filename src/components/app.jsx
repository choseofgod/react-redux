import React, {Component} from "react";
import {INCREMENT,DECREMENT} from  '../redux/action-types'

export default class App extends Component {


  increment = () => {
    const {value} = this.value
    this.props.store.dispatch({type:INCREMENT,data : value * 1})
  }
  decrement = () => {
    const {value} = this.value
    this.props.store.dispatch({type:DECREMENT,data : value *1})
  }
  incrementOdd = () => {
    const count = this.props.store.getState()
    const {value} = this.value
    if(count%2 === 1){
      this.props.store.dispatch({type:INCREMENT,data: value * 1})
    }
  }
  incrementAsync = () => {
    const {value} = this.value
    setTimeout(() => {
      this.props.store.dispatch({type:INCREMENT,data: value * 1})
    },1000)

  }

  render() {
    const count = this.props.store.getState()

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