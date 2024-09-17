
import axios from "axios";
import { useRef,useState } from "react";

const Get1=()=>{
    const [num,setNum]=useState({});
    const ref1=useRef(null);

    const Get1data =async()=>{
        const res=await axios.get(`http://localhost:9001/get/${ref1.current.value}`);
        const {data}=res;
        setNum(data);

    }
    const  get1_data=(e)=>{
        e.preventDefault();
        Get1data();
    }
    return(
        <>
        <h1>GET ONE RECORD</h1><p></p><br></br>
        <form>
            <table border={1}>
                <tr>
                    <td> GetOne:</td>
                    <td><input type ="text" ref={ref1}></input><br></br><br></br></td>
                </tr>

                <tr>
                    <td></td>
                    <td><button onClick={get1_data}>Get1Record </button></td>
                </tr>


       
        <h1>{JSON.stringify(num)}</h1>
        </table>
        </form>
        </>
    )
}
export default Get1;