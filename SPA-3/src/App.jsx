import React from "react";
import {Link,Routes,Route} from 'react-router-dom'
import Register from "./components/Register";
import Login from "./components/Login";
import Empdetails from "./components/Empdetails";
import Adminlogin from "./components/Adminlogin";
import ViewEmp from "./components/ViewEmp";
import Product from "./components/Product";
import Employee from "./components/Employee";
import Admin from "./components/Admin";

const App=()=>{
    return(
        <>
        <h1>Welcom to Home Page</h1>

        <Link to="/" style={{marginRight:100}}>Employee</Link>
        <Link to="/admin" style={{marginRight:100}}>Admin</Link>
        <p></p>
        <Routes>
            <Route path="/" element={<Employee/>}></Route>
            <Route path="employee/register" element={<Register/>}></Route>
            <Route path="employee/login" element={<Login/>}></Route>
            <Route path="employee/empdetails" element={<Empdetails/>}></Route>


            <Route path="/admin" element={<Admin/>}></Route>
            <Route path="/admin/adminlogin" element={<Adminlogin/>}></Route>
            <Route path="/admin/viewEmp" element={<ViewEmp/>}></Route>
            <Route path="/admin/product" element={<Product/>}></Route>

        </Routes>

        </>
    )
}
export default App