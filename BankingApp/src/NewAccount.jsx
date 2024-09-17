
import React, { useRef, useState } from "react";




   const NewAccount=()=>{

    const[arr,setArr]=useState({});
    const[msg,setMsg]=useState();

    const accountNumber=useRef(null);
    const accountName=useRef(null);
    const password=useRef(null);
    const amount=useRef(null);
    const address=useRef(null);
    const mobileNumber=useRef(null);

    const Account=async()=>{
        const result=await axios.post("http://localhost:9001/save",
        {"accountNumber":accountNumber.current.value,
         "accountName":accountName.current.value,
         "password":password.current.value,
         "amount":amount.current.value,
         "address":address.current.value,
         "mobileNumber":mobileNumber.current.value,
    
    
    
    } );

    const {data}=result;
    setArr(data);


    }
    const getData=()=>{
        Account();
        if(accountNumber.current.value=="")
        {
            setMsg("enter proper data");
        }
       
    }


    return(
        <>
        <table>
            <tbody>
                <tr>
                    <td>AccountNumber</td>
                    <td><input type="text" ref={accountNumber} /> </td>
                </tr>

                <tr>
                    <td>AccountName</td>
                    <td><input type="text" ref={accountName} /> </td>
                </tr>

                <tr>
                    <td>Password</td>
                    <td><input type="password" ref={password} /> </td>
                </tr>

                <tr>
                    <td>Amount</td>
                    <td><input type="text" ref={amount} /> </td>
                </tr>

                <tr>
                    <td>Address</td>
                    <td><input type="text" ref={address} /> </td>
                </tr>

                <tr>
                    <td>MobileNumber</td>
                    <td><input type="text" ref={mobileNumber} /> </td>
                </tr>


                <tr>
                    <td></td>
                    <td><button onClick={getData}>CreateAccount</button> </td>
                    <td><input type="reset"/> </td>
                </tr>


            </tbody>
        </table>
        <h2>{JSON.stringify(arr)}</h2>
     

        </>

    )
}
export default NewAccount;