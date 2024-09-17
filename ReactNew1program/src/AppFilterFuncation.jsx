import React from "react";
const App11 =()=>{
    const names=['Ajay','Ravi','Sai','Sri','Raju','Naveen'];
    const filters =names.filter (name=> (name.includes('A')))
//
    const arrs=[10,20,30,40,50,60,70,80,90];
    const items =arrs.filter (arr=>arr<=40);
    return(
        <>
        {
            filters.map(item => <li key={item}> {item}</li>)
        }<br></br>


        //

        {
            items.map(it=><li key={it}>{it}</li>)
        }
        
        </>

    )
}
export default App11