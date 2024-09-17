import React, { useRef, useState } from 'react'
import axios from 'axios';
const Delete1 = () => {

  const[data,setData]=useState({});

  const ref1=useRef(null);

  const  DeleteHandle=(e)=>{
    e.preventDefault();
    deleteData();
    }
  
  const deleteData =async()=>{
    const respones=await axios.delete(`http://localhost:2025/delete/${ref1.current.value}`);
    const {status}=respones;
    setData("Data Delete Success" +status);
  }
  
  return (
    <div>
    
    <h1>Delete One Record </h1>
        <form>
            <table border={1}>

                <tr>
                    <td>Delete Id:</td>
                    <td> <input type ="text"  placeholder="Delete" ref={ref1}></input><br></br><br></br></td>
                </tr>

                
                <tr>
                    <td></td>
                    <td><button onClick={DeleteHandle}>DeleteRecord </button></td>
                </tr>

                <tr>
                    <td></td>
                    <td> <h1>{JSON.stringify(data)}</h1></td>
                </tr>

        </table>
        </form>



    </div>
  )
}

export default Delete1