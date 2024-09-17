import React from "react";
import { useState } from "react";

const Empdetails=()=>{

    const[emp,setEmp]=useState([
        {empname:"Rahul",  empmail:"Rahul@123.gmail.com",empaddress:"Hyderabad"},
        {empname:"Ajay",  empmail:"Ajay@86.gmail.com",empaddress:"Sr Nagar"},
        {empname:"Ravi", empmail:"Ravi@54.gmail.com",empaddress:"Sec"},
    ]);

    return(
        <>

        <div>
           <center>  <h1> Empdetails Form</h1></center> 
         
           
            <table border={1} cellPadding={2} align="center" CellPadding={10}>
                <thead>
                    <tr>
                        <th>EmpName</th>
                         <th>Email</th>
                        <th>Address</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        emp.map((element,index)=>{
                            return(<tr key={index}>

                                <td>{element.empname}</td>
                                <td>{element.empmail}</td>
                                <td>{element.empaddress}</td>
                                
                            </tr>

                            )
                            
                             } )

                    }
                </tbody>

            </table>


        </div>
        </>
    )
}
export  default Empdetails