import React, { Component } from 'react'
import App1 from './App'
import './App.css'


export default class AppC extends Component {

    state={
        name:"pavank",
        email:"pavan123@.com",
        age:23
    }
     
    
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.email}</h1>
        <App1/>
        
        <div className="pk">
            <h3>Hello World</h3>
        </div>

        <p style={{color:"red",backgroundColor:"lightblue", textAlign:"center",padding:"50px",margin:"30px"}}>sathya It</p>

       
      </div>   
    )
  }
}
