import React, { useEffect,useState } from "react";
import axios from "axios";



const GetEx1=()=>{

    const [arr,setArr]=useState([]);
    
    const getData= async()=>{
        const res= await axios.get("http://localhost:9001/getAll");
        const{data}=res
        setArr(data);

    }
     useEffect((e)=>{
        e.preventDefault();
            getData();
        },[])



    return(
        <>

        <div id="p1">
            <table border={1}>

                <thead>
                    <tr>
                        <th>Cid</th>
                        <th>CName</th>
                        <th>Currentreading</th>
                        <th>Previousreading</th>
                        <th>Total_Bill</th>
                        <th>Units</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        arr.map((element,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{element.cid}</td>
                                    <td>{element.cname}</td>
                                    <td>{element.currentreading}</td>
                                    <td>{element.previousreading}</td>
                                    <td>{element.units}</td>
                                    <td>{element.totalBill}</td>

                                    
                                </tr>

                            )

                        })
                    }

                    
                </tbody>
                <tfoot></tfoot>

            </table>
        </div>
        
        </>
    )

}
export default  GetEx1