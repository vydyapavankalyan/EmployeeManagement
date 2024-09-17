import React, { useEffect, useState } from "react";

const URL= "https://api.edamam.com/doc/open-api/recipe-search-v2.json"

const App=()=>{

  const[search,setSearch]=useState([]);

  const fetchDrink= async (apiURL)=>{
    const response=await fetch(apiURL);
    const {drinks} =await response.json();


    console.log(drinks);

  }
  useEffect(()=>{
    fetchDrink(URL);

  },[] )
    
  const submitHandel=(e)=>{
    e.preventDefault();
   
  }
  return(
    <>
    <div>
      <center>
      <h3>Food Recipe</h3>
      <form onSubmit={submitHandel}>
        <input type="text" value={search} onChange={ (e)=> setSearch(e.target.value)}/><br></br><br></br>
        <input type="submit" value="Search"/>
      </form>
      </center>

    </div>

    </>
  )
}
export default App