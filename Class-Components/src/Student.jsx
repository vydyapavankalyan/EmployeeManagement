import React ,{Component} from "react"
class Student extends Component
{
    constructor(props)
    {
        super(props)
    }

    render(){

    
        return(
            <>
            <h1>My RollNo is={this.props.rollNo}</h1>
            <h1>My Name is={this.props.name}</h1>
            <p>Array Value Are={this.props.arr}</p>
            </>
        )
    
    }
}
export default Student