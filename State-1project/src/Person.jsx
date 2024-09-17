import { Component } from "react";
class Person extends Component
{
    state={
        pid:100,
        pname:"suman",
        age:25,
        address:this.props.address
    }
    render(){
        return(
            <>
            <h1>Person Id={this.state.pid}</h1>
            <h1>Person Name={this.state.pname}</h1>
            <h1>Person age={this.state.age}</h1>
            <h1>Person Address={this.state.address}</h1>

            </>
        )
    }
}
export default Person