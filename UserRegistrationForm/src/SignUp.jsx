import React,{useState} from "react";

const SignUp=()=>{

    const[Signup,setSignup]=useState({
        Firstname:"",
        Surname:"",
        MobileNumber_or_email_Address:"",
        NewPassword:"",
        DateofBirth:"",
        Gender:"",
        
    })

    return(
        <>
        
         <div>
           
           <form>
            <table border={1} cellPadding={10} align="center" cellSpacing={2}>
                
             <h1>Sign Up</h1><hr></hr>
             
    
          
                <tr>
                    
                    <td><input type="text" name="uname" placeholder="First name"/></td> 
                    <td><input type="text" name="surname" placeholder="Surname name"/></td>
                    </tr>

                <tr>
                    
                    <td><input type="text" name="Mobile number" placeholder="Mobile number or email "/></td>
                </tr>

                <tr>
                    
                    <td><input type="date" name="weeks" placeholder=""/></td>
                </tr>

                <tr>
                    
                    <td><input type="radio" name="Gender" value="male"/>Male</td>
                    <td><input type="radio" name="Gender" value="female"/>Female</td>
                    <td><input type="radio" name="Gender" value="custom"/>Custom</td>
                </tr>
                
                <tr>
                    <td><input type="submit" value="Sign Up"/></td>
                </tr>
               
 
            </table>
            
           </form> 
           
        </div>

        </> 
    )

}
export default SignUp