import React from "react";
import axios from "axios";
import { useRef,useState } from "react";

const DeleteEx2=()=>{
    const [num,setNum]=useState(null);
    const ref1=useRef(null);

    const deleteData =async()=>{
        const res=await axios.delete(`http://localhost:9001/delete/${ref1.current.value}`);
        const {status}=res;
        setNum(status);

    }
    const  delete_data=()=>{
    deleteData();
    }
    return(
        <>
        <h1>Delete One Record </h1>
        <form>
            <table border={1}>

                <tr>
                    <td></td>
                    <td> <input type ="text"  placeholder="Delete" ref={ref1}></input><br></br><br></br></td>
                </tr>

                
                <tr>
                    <td></td>
                    <td><button onClick={delete_data}>DeleteRecord </button></td>
                </tr>

                <tr>
                    <td></td>
                    <td> <h1>{JSON.stringify(num)}</h1></td>
                </tr>

        </table>
        </form>
        </>
    )
}
export default DeleteEx2