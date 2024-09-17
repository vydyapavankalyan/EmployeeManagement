import React from "react";
import { useState } from "react";

const ViewEmp=()=>{

    const[emp,setEmp]=useState([
        {empname:"Arun",  empmail:"Arun@823.gmail.com",empaddress:"Hyderabad"},
        {empname:"Shashi",  empmail:"Shashi@464.gmail.com",empaddress:"Sr Nagar"},
        {empname:"Kalyan", empmail:"Kalyan@024.gmail.com",empaddress:"Sec"},
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
export  default ViewEmp