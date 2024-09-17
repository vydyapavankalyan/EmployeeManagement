import React  from "react";
import{Link,Outlet} from 'react-router-dom'
const Employee=()=>{
    return(
        <>
        <h1>Welcom To Employee Home Page</h1>
        <Link to='employee/register'style={{marginRight:100}}>Register</Link>
        <Link to='employee/login' style={{marginRight:100}}>Login</Link>
        <Link to='employee/empdetails'style={{marginRight:100}}>Empdetails</Link>
        <br></br>
        <Outlet></Outlet>

        </>
    )
    }
    export default Employee