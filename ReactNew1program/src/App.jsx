import React, { Component } from 'react'

export default class App1 extends Component {
  state={
    name:"pavansai",

  }
  render() {
    return (
      <>
       <span style={{color:"red", background:"black"}}>Welcome to {this.state.name}</span>
       
      </>
     
    )
  }
}

