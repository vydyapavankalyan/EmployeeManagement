import React  from "react";
import{Link,Outlet} from 'react-router-dom';
const Admin=()=>{
    return(
        <>
        <h1>Welcom To Admin Home Page</h1>
        <Link to='/admin/adminlogin' style={{marginRight:100}}>Adminlogin</Link>
        <Link to='/admin/viewEmp' style={{marginRight:100}}>ViewEmp</Link>
        <Link to='/admin/product' style={{marginRight:100}}>Product</Link>
        
        <br></br>
        <Outlet></Outlet>

        </>
    )
    }
    export default Admin