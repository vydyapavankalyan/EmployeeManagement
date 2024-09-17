import { Component } from "react";
import Student from "./Student";
class Employee extends Component{

    constructor(props)
    {
        super(props)
    }

    render(){
        return(
            <>
            <p>Employee id={this.props.id}</p>
            <p>Employee Name={this.props.name}</p>
            <p>Employee Salary={this.props.salary}</p>

            <Student rollNo={999} name={"sai"}/>
            <Student arr={[599,976,753,754,333]}/>    
            </>
        )

    }
}
export default Employee