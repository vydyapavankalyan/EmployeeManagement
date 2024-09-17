import React from "react";
const Register=()=>{
    return(
        <>
        <div>
        <h1>Register Form</h1>
        
        <form>
            <table border={1}>
                <tr>
                    <td>Name:</td>
                    <td><input type="text" name="uname"  placeholder=" Enter Name" required="uname"/> </td>
                </tr>

                <tr>
                    <td>Password:</td>
                    <td><input type="password" name="password"  placeholder="password" required="password"/> </td>
                </tr>

                <tr>
                    <td>Email:</td>
                    <td><input type="text" name="email"  placeholder="Email" required="email"/> </td>
                </tr>

                <tr>
                    <td>Address:</td>
                    <td><input type="text" name="address"  placeholder="Address" required="address"/> </td>
                </tr>

                <tr>
                    <td>Gender:</td>
                    <td><input type="radio" name="gender"  value="male"/>Male 
                    <input type="radio" name="gender"  value="female"/>Female 
                    </td>
                </tr>


                <tr>
                    <td>State:</td>
                    <td>
                        <select>
                            <option value="Telangana">Telangana</option>
                            <option value="Vijawada">Vijawada</option>
                            <option value="Vizag">Vizag</option>
                            <option value="Godavarikhani">Godavarikhani</option>
                            <option value="Karimnagar">Karimnagar</option>
                        </select>
                         </td>
                    </tr>


                    <tr>
                    <td>Country:</td>
                    <td>
                        <select>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="Austria">Austria</option>
                            <option value="China">China</option>
                        </select>
                         </td>
                    </tr>

                <tr>
                    <td>Mobile:</td>
                    <td><input type="text" name="mobile"  placeholder="Mobile Number" required="mobile"/> </td>
                </tr>


                <tr>
                    <td></td>
                    <td><input type="submit" value="Register"/> </td>
                </tr>


            </table>
        </form>
        </div>

        </>
    )
}
export default Register