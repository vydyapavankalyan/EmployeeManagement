import React, { useState } from "react";
const Product_Invoice=()=>{
    const [data, setdata]=useState({
        ProductId:"",
        ProductName:"",
        Price:"",
        Quantity:""
        
        
        
    })
  
var total=0;
var Discount=0;
var gst=0;
var Payment_Invoice_Bill=0;

    const [result ,setResult]=useState("");
    const{ProductId,ProductName,Price,Quantity}=data;
    

    const change=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})

    }
    total=data.Price*data.Quantity;

    const display=(e)=>{
        e.preventDefault();
        if(total<5000){
         Discount=total*15/100;
         gst=total+gst-Discount;
         Payment_Invoice_Bill=total+gst-Discount;
         setResult(Payment_Invoice_Bill=total+gst-Discount);
        }
        else if(total>=5000 && total<30000){
            Discount=total*20/100;
            gst=total+gst-Discount;
            Payment_Invoice_Bill=total+gst-Discount;
            setResult(Payment_Invoice_Bill=total+gst-Discount);
        }
        else if(total>30000){
            Discount=total*25/100;
            gst=total+gst-Discount;
            Payment_Invoice_Bill=total+gst-Discount;
            setResult(Payment_Invoice_Bill=total+gst-Discount);
        }

    }
    return(
        <>
        <div>
            <form onSubmit={display}>
                Product Id:<input type="text" name="ProductId" value={ProductId} onChange={change} /><p></p>
                Product Name:<input type="text" name="ProductName" value={ProductName} onChange={change} /><p></p>
                Price :<input type="text" name="Price" value={Price} onChange={change} /><p></p>
                Quantity:<input type="text" name="Quantity" value={Quantity} onChange={change} /><p></p>
                <input type="submit" value="PrintInvoice"/>
            
            </form>
            <h1>{ProductId}</h1>
            <h1>{ProductName}</h1>
            <h1>{Price}</h1>
            <h1>{Quantity}</h1>
            <h1>{total}</h1>
            <h1>{gst}</h1>
            
            <h1>{Payment_Invoice_Bill}</h1>
            
        </div>
        </>
    )
}
export default Product_Invoice