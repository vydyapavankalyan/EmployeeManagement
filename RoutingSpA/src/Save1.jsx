import React, { useRef, useState } from 'react'
import axios from 'axios'

const Save1 = () => {

    const [save,setSave]=useState([])
    
    const ref2=useRef(null);
    const ref3=useRef(null);
    const ref4=useRef(null);
   

    

    const Savedata=(e)=>{
      e.preventDefault();  
         postEx();
    }

    
    const postEx= async()=>{
        const respones =await axios.post(`http://localhost:2025/save`, 
        {"empid":ref2.current.value,  "empname":ref3.current.value,

        "salary":ref4.current.value,});
        const{data}=respones
        setSave("Success"+data);
    }

  return (


                 <> 
               <div>
                <center>
            <h1>New Record Inset</h1>
            <form>

                <table border={1}>
                    <tr>
                        <td>Employee Id:</td>
                        <td> <input type="text" ref={ref2}></input><br></br><br></br></td>
                    </tr>

                    <tr>
                        <td>Employee Name:</td>
                        <td>  <input type="text" ref={ref3}></input><br></br><br></br></td>
                    </tr>

                  
                    <tr>
                        <td>Employee Salary</td>
                        <td> <input type="text" ref={ref4}></input></td>
                    </tr>

    
      <tr>
        <td></td>
        <td><button onClick={Savedata}>Save</button></td>
     </tr>
      
   <tr>
        <td></td>
        <td> <p>{JSON.stringify(save)}</p></td>
    </tr>
    

     </table>

     </form>
     </center>
     </div>
       
     </>

  )
}

export default Save1