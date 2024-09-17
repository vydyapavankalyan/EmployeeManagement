import React from "react";
const App10=()=>{
    const arr=[
        {
            id:1,
            title:"ReactJs",
              pavan:"It"
        },
        {
            id:2,
            title:"Java",
             pavan:"Nares"
            
        },
        {
            id:3,
            title:"python",
              pavan:"NareshIt"
        },
        {
            id:4,
            title:"JavaScript",
            pavan:"sathya"
        }
    ]


    return(
        <>
       {
        arr.map(
            (value) => <li key={value.id} >{value.title}</li>
            
        )
       }
        
        </>

    )
}
export default App10