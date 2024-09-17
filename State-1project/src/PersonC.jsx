import { Component } from "react";
class PersonC extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            pid:420,
            pname:"Rahul",
            age:30,
            address:this.props.address
        }
    }
        render()
        {
            return(
                <>
                <h1>PersonC Id={this.state.pid}</h1>
                <h1>PersonC Name={this.state.pname}</h1>
                <h1>PersonC age={this.state.age}</h1>
                <h1>PersonC Address={this.state.address}</h1>
                </>
            )
        }
    }
    


export default PersonC