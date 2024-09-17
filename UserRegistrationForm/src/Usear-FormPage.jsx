import React,{useState} from "react";

const UsearForm=()=>{

    const[formData,setformData]=useState({
        username:"",
        password:"",
        email:"",
        Gender:"",
        city:"",
        state:"",
        Address:"",
    })

    return(
        <>

        
        <div>
            <h1>Usear Registration</h1>
        
        
          Name:<input
            type="text"
            name="usearname"
            placeholder="Usearname"
            /><p></p>

           Password:<input
            type="password"
            name="password"
            placeholder="password"
            /><p></p>

            Email:<input
            type="text"
            name="text"
            placeholder="Email"
            /><p></p>

           Gender:<input
            type="radio"
            name="Gender"
            placeholder="M"
            />Male
            <input
            type="radio"
            name="Gender"
            placeholder="f"
            />Female<p></p>

           City:
            <select name="dropdown">
                <option value="Hyderabad">Hyderabad</option>
                <option value="Karimnagar">Karinmagar</option>
                <option value="Godavarikhani">Godavarikhani</option>
                <option value="Warangal">Warangal</option>
                <option value="Nizamabad">Nizamabad</option>
                <option value="Nalgonda">Nalgonda</option>
                <option value="Khammam">Khammam</option>
                <option value="Rangareddy">Rangareddy</option>
                </select><p></p>



                State:
            <select name="dropdown">
                <option value="Telangana">Telangana</option>
                <option value="AndhraPradesh(Amaravati)">AndhraPradesh(Amaravati)</option>
                <option value="ArunachalPradesh">ArunachalPradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Goa">Goa</option> 
                </select><p></p>


             Address:
             <textarea
            name="address"
            placeholder="Address"
            /><p></p>
            

           PinCode:<input
            type="text"
            name="text"
            placeholder="PinCode"
            /><p></p>

         
        </div>
        
        
        </>
    )
}
export default UsearForm

    
   