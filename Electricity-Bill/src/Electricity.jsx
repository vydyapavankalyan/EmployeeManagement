import React from "react";
const Electricty=()=>{
    let cno=101;
    let cname="pavan";
    let cr=500,pr=200;
    let units=null;
    let total_bill=null;
    units=cr-pr;

    function bill(){
         
        if(units<500)
        {
            total_bill=units*5.25;
            return total_bill;
        }
        else if(units>=500 && units<100)
        {
            total_bill=units*7.25;
            return total_bill;
        }
        else {
            total_bill=units*9.34;
            return total_bill;
        }

       
    }
    return(
        <>
        <div>
            <p> CID:{cno}</p>
            <p> CName:{cname}</p>
            <p> CR:{cr}</p>
            <p> PR:{pr}</p>
            <p> Units:{units}</p>
            <p> Total_bill:{bill()}</p>
            
        </div>
        
        </>

    )
}
export default Electricty;