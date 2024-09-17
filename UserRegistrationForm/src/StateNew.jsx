import React, { useState } from "react";

const Index=()=>{

  
    const [list,setList]=useState([])

    const [message,setmessage]=useState({
        text:"",
        id:"",

    })
    const changeMessage=(e)=>{
        setmessage({
            ...message,
            text:e.target.value,
        });
    }

    const handleSubmit= (e) =>{
        e.preventDefault();
        let newTodo={
            text: message.text,
            id: new Date().getTime().toString(),
        };
          setList([...list, newTodo]);
          setmessage({
            text:"",
            id:"",
          })
          
  
    }

    const handleDelete=(id)=>{
        let newTodos=list.filter((eachItem)=>{
            return eachItem.id !==id;
        }

        )
        setList(newTodos);
    }

 

    return(
        
        <div>
         <form>
            <input type="text" name="message" id="message" placeholder="Enter Some Text" value={message.text} 
            onChange={changeMessage}
            
            />
            <button onClick={handleSubmit} type="submit">Add</button>
         </form>
       <hr></hr>
       {
        list.length ==0 &&<h4>There no itemes in the list</h4>
       }
       <ul>
        {
            list.map((eachItem)=>{
                const{ text,id}=eachItem;
                return(
                    <li key={id}>
                    <span>{text}</span>
                    <button>edit</button>
                    <button onClick={()=>handleDelete(id)}>delete</button>
                </li>
                );
            }

            )
        }
       </ul>
        </div>
        

    )
}
export default Index;