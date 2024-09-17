import React from "react";
const Register=()=>{
    return(
        <>
        
        <div>
            <center>
            <body>
            <h1> <font face="jokerman"color="(255,29,50)">New Usear Register</font></h1>

            <tr>
          
                        <td>Home:</td>
                        <td>
                            <select>
                            <option value=""></option>
                                <option value="Sing UP ">SignUp</option>
                                <option value="contact">contact</option>
                                <option value="Service">Service</option>
                                <option value="Help">Help</option>
                            </select>
                        </td>
                    </tr><p></p>
            <form> 
            <font face="jokerman"color="(255,29,66)">    
                <table border={1}>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" name="uname" placeholder="Enter Name"></input></td>
                    </tr>

                    <tr>
                        <td>Password:</td>
                        <td><input type="password" name="password" placeholder="Enter Password"></input></td>
                    </tr>

                    <tr>
                        <td>Email:</td>
                        <td><input type="email" name="email" placeholder="Email"></input></td>
                    </tr>

                    <tr>
                        <td>Gender:</td>
                        <td><input type="radio" name="Gender" value="male"/>Male
                        <input type="radio" name="Gender" value="Female"/>Female
                        </td>
                    </tr>

                    <tr>
                        <td>City:</td>
                        <td>
                            <select>
                            <option value=""></option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Karimnagar">Karimnagar</option>
                                <option value="Godavarikhani">Godavarikhani</option>
                                <option value="Ameerpet">Ameerpet</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td>State:</td>
                        <td>
                            <select>
                            <option value=""></option>
                                <option value="Telangana">Telangana</option>
                                <option value="AndhraPradesh(Amaravati)">AndhraPradesh(Amaravati)</option>
                                <option value="ArunachalPradesh">ArunachalPradesh</option>
                                <option value="Bihar">Bihar</option>
                            </select>
                        </td>
                    </tr>



                    <tr>
                        <td>Address:</td>
                        <td><textarea name="address" placeholder="Address"/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="Submit" value="Register"></input>
                        <input type="Reset" value="Reset"></input>
                        </td>
                    </tr>
                </table>
                </font>
            </form>
            
            </body>
            </center>
        </div>
        
        </>
    )
}
export default Register