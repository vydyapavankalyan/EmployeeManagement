import React, { useState, useRef } from "react";

import axios from 'axios';

const  Save=()=>{

    const [data,setData]=useState({});

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
  


    const Result = async()=>{

        const Save =await axios.post(`http://localhost:2026/save`,
            {
            "empId": ref1.current.value,
            "empName":ref2.current.value,
            "empEmail":ref3.current.value,
            "empMobileNo":ref4.current.value,
            "empAddress":ref5.current.value

        });
        const resultData = Save.data
        setData(resultData);

    }

    const check=()=>{
      Result();
    }





return(<>
 <div>
            <h1>Create Form</h1>
            <table>
            <tbody>
                <tr>
                <td>Employee Id : </td>
                <td><input type="text" ref={ref1} /></td>
                </tr>
                <tr>
                <td>Employee Name : </td>
                <td><input type="text" ref={ref2} /></td>
                </tr>
                <tr>
                <td>Employee Email : </td>
                <td><input type="email" ref={ref3} /></td>
                </tr>
                <tr>
                <td>Employee MobileNo : </td>
                <td><input type="text" ref={ref4} /></td>
                </tr>
                <tr>
                <td>Employee Address : </td>
                <td><input type="text" ref={ref5} /></td>
                </tr>
                
                <br />
                <tr>
                <td><button onClick={check}>Submit</button></td>
                <td><button type='reset'>Clear</button></td>
                </tr>
            </tbody>
            </table>
        </div>
        <p>{JSON.stringify(data)}</p>

</>)


}

export default Save;