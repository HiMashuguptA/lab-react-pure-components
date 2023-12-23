import React, { Component } from 'react'

export default class SimpleCounterComponent extends Component {
    constructor(){
        super()
        this.state={
            count:0,
            toggle:true
        }
    }
    chnageToggle = ()=>{
        this.setState({
            toggle: !this.state.toggle
        })
    }
    increaseCount= ()=>{
        if(this.state.toggle){

            this.setState({
                count: this.state.count+1
            })
        }else{
            this.setState({
                count: this.state.count
            })
        }
    }
  render() {
    console.warn("This is a simple component");
    return (
      <div>
        <hr />
        <h1>SimpleCounterComponent</h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.chnageToggle} style={{backgroundColor:`${this.state.toggle ? "green" : "red"}`}}>Toggle</button>
        <button onClick={this.increaseCount}>+</button>
        <hr />
        </div>
    )
  }
}
