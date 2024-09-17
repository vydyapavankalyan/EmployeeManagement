import React from "react";
const LoginPage=()=>{

    
    

    return(
        <>
        <div>
            <div class="main">
                <input type="checkbox" id="chk" aria-hidden="true"></input>
                <div class="signup">
                    <form>
                        <label for="chk" aria-hidden="true">Sign Up</label>
                        <input type="text" name="uname" placeholder="User name" required=""></input>
                        <input type="email" name="email" placeholder="Email" required=""></input>
                        <input type="password" name="password" placeholder="Password" required=""></input>
                        <button >Sign Up</button>
                        
                        
                    </form>

                </div>
                <div class="login">
                    <form>
                        <label for="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" required=""></input>
                        <input type="password" name="password" placeholder="Password" required=""></input>
                        <button>Login</button>
                    </form>

                </div>

            </div>

        </div>
        </>
    )
}
export default LoginPage