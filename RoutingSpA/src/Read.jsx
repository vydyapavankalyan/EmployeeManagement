import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';

const Read = () => {
    const[data,SetData]=useState([])
 const{id}=useParams();
    useEffect( ()=>{
        axios.get('http://localhost:2025/get'+id)
        .then(respones=>SetData(respones.data))

    },[])
  return (
    <div>

        
<> 
               <div>
                <center>
            <h1>New Record Inset</h1>
            <form>

                <table border={1}>
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



    </div>
  )
}

export default Read