import React, { useEffect, useState } from 'react'

const URL="https://jsonplaceholder.typicode.com/users";

const FinalApi = () => {

const [usearData,setUseardata]=useState([]);

const fetchusearData= async (apipavan) =>{
const response =await fetch(apipavan);
const data = await response.json();

setUseardata(data);

};


useEffect(()=>{
 fetchusearData(URL);
},[]);


  return (
    <>
     <div>FinalApi</div>
     <ul>
        {
            usearData.map((eachItem)=>{
                const{id,name,email,phone}=eachItem;
                return(
                    <li key={id}>
                        <div> Name:{name}</div>
                        <div>Email:{email}</div>
                        <div>PhoneNo:{phone}</div>


                    </li>
                )

            })
        }
     </ul>
    </>
   
  )
}

export default FinalApi