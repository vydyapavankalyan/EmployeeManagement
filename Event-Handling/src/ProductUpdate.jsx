import React, { Component } from "react";
class Product extends Component
{
    constructor(props)
    {
        super(props) 
        this.state={
            pid:444,
            pname:"Mobile",
            price:129999.00,
            company_name:this.props.company_name
        }  
    }
    Change=()=>{
        this.setState({pname:"OnePluseNord"})
    }

    Price=()=>{
        this.setState({price:"60000.88"})
    }
    render(){
        return(
            <>
            <h1>Product Id={this.state.pid}</h1>
            <h1>Product Name={this.state.pname}</h1>
            <h1>Product Price={this.state.price}</h1>
            <h1>Product Companye={this.state.company_name}</h1>
            <button onClick={this.Change}>ChangeName</button>
            <button onClick={this.Price}>ChangePriceOrganial</button>

            </>
        )
    }

        
}
export default Product