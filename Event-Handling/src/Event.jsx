import React, { Component } from "react";
class Event extends Component
{
    state={
        num:120,
        num2:401
    }
    check=()=>{
        document.write("Welcom To Event Handling");

    }
    even_or_odd=()=>{
        if(this.state.num%2==0){
            document.write("The Number is Even")
        }
        else{
            document.write("The Number is Odd")
        }

        
    }
    render(){
        return(
            <>
            <h1>This Component For Even Handling</h1>
            <button onClick={this.check}>ClickMe</button>
            <button onClick={this.even_or_odd}>Check</button>
            </>
        )
    }
   
}
export default Event  