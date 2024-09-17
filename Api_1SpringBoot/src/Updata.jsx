import React from "react";
import axios from "axios";
import { useRef,useState } from "react";

const Updata=()=>{

    const[res,setRes]=useState({});

    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);
    const ref4=useRef(null);
  
    
    const put_data=(e)=>{
        e.preventDefault();
        postEx();
    }
    const postEx =async()=>{
        const res=await axios.put(`http://localhost:9001/update/${ref1.current.value}`,
        {"cname":ref2.current.value,"currentreading":ref3.current.value,
        "previousreading":ref4.current.value,});
        const{data}=res
        setRes(data);
    }

    return(
        <>


     <div>
            <h1>Updata New Record</h1>
            <form>
                <table border={1}>
                    
                         <tr>
                        <td>Electricity:CID:</td>
                        <td> <input type="text" ref={ref1}></input><br></br><br></br></td>
                    </tr>

                    <tr>
                        <td>Electricity:CName:</td>
                        <td> <input type="text" ref={ref2}></input><br></br><br></br></td>
                    </tr>

                    <tr>
                        <td>Electricity:CurrentReading:</td>
                        <td>  <input type="text" ref={ref3}></input><br></br><br></br></td>
                    </tr>

    
                    <tr>
                        <td> Electricity:PreviousReading:</td>
                        <td> :<input type="text" ref={ref4}></input><br></br><br></br></td>
                    </tr>


                    <tr>
                        <td></td>
                        <td><button onClick={put_data}>Updata</button></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td><p>{JSON.stringify(res)}</p></td>
                    </tr>

    
     </table>
     </form>
     </div>
        </>
    )
}
export default Updata
