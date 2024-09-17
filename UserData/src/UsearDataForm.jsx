import React,{useState} from "react";
const UsearDataForm=()=>{
    const[Products,setProducts]=useState([
        {pid:222,pname:"Mobile",price:50000.99,compnay:"Oppo"},
        {pid:333,pname:"MiTv",price:670000.99,compnay:"MI"},
        {pid:444,pname:"DellTab",price:90000.99,compnay:"Dell"},
        {pid:555,pname:"Watch",price:8000.99,compnay:"HMT"},   

    ])
    return(
        <>
        <div>
            <table border={1} cellSpacing={2} align="center" cellPadding={10}>
                <thead>
                    <tr>
                        <th>PID</th>
                        <th>PName</th>
                        <th>Price</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Products.map((element,index)=>{
                            return(<tr key={index}>

                                <td>{element.pid}</td>
                                <td>{element.pname}</td>
                                <td>{element.price}</td>
                                <td>{element.compnay}</td>

                            </tr>

                            )
                        }

                        )
                    }
                </tbody>
 
            </table>
        </div>
        </>
    )
}
export default UsearDataForm