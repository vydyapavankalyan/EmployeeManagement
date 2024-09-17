import React, { useState } from "react";
const App3=()=>{
    const intialArry=[{
        id:101,
        firstName:"pavan",
        lastName:"kalyan",
        age:23,
    },
    {
        id:102,
        firstName:"sai",
        lastName:"Krishna",
        age:20,
    },
    {
        id:103,
        firstName:"Ajay",
        lastName:"Ram",
        age:25,
    }
]
    

    const [data,setData]=useState(intialArry)
   

    const handelDelete=(comingId)=>{
        const filterData=data.filter((eachItem)=>{
            return eachItem.id !==comingId
        } );
        setData(filterData);

    }
    return(
        <>
        <div>

            <ul>
                {
                    data.map((eachItem,index )=>{
                        const{firstName,lastName,age,id}=eachItem;

                        return(
                            <li key={index}>
                                <span>FirstName:{firstName}</span><br></br>
                                <span>LastName:{lastName}</span><br></br>
                                <span>Age:{age}</span>
                                <button onClick={()=> handelDelete (id)}>Delete Me</button><hr></hr>

                            </li>
                        )

                    }
                )
                }
            </ul>
            

        </div>
        </>
    )
}
export default App3