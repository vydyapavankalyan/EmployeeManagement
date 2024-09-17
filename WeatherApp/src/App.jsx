import React from "react";
import { useState } from "react";

const App=()=>{

  const [city,setCity]=useState("")
  const [result,setResult]=useState("")


  const changeHandler=e=>{
    setCity(e.target.value);
  }

  const submitHandler= e =>{
    e.preventDefault();

   fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={0af2d661c63c06914ebc84b7dae0b1ec}
   `).then(
    response =>response.json()
   ).then(data=>{
    const kelvin =data.main.temp;
    const celsius =kelvin-273.15
    setResult("Temperature at"+ " "+ city+ "\n"+ Math.round(celsius)+"C")
    setCity("");
  
   })
   
  }

  return(
    <>
    <div>
      <center>
      <h2>Weather App</h2>
      <form onSubmit={submitHandler}>
      <input type="text" name="city" value={city}  onChange={changeHandler}/><p></p>
      <input type="submit"  value="Get Temperature"/>

      </form>
      <h1>{result}</h1>

      </center>
    </div>

    </>
  )
}
export default App