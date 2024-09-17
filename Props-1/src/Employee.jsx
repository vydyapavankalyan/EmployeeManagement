import Student from "./Student";
function Employee(props)
{
    return(
        <>
        <p>Employee id={props.id}</p>
        <p>Employee Name={props.name}</p>
        <p>Employee Salary={props.salary}</p>

        <Student rollNo={'333'} name={"Arun"}/>
        <Student arr={[100,200,300,400,500]}/>
        </>
    )
}
export default Employee