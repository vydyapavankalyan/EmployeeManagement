import React,{useState} from "react";
const UsearData=()=>{
    const [uid,setuid]=useState(333);
    const [name,setname]=useState("ReactJs");
    const [salary,setsalary]=useState(90000.99);
    const [flag,setflage]=useState(true);
    const [arr,setArr]=useState([100,200,300,400,500]);
    const [user,setuser]=useState({"key1":200,"key2":9000,"key3":800});
    return(<>
    <div>
        <h2>UserId={uid}</h2>
        <h2>UserName={name}</h2>
        <h2>Salary={salary}</h2>
        <h2> Flag={JSON.stringify(flag)}</h2>
    </div>
    <div>
       object values Are:{user.key3},
    </div>


    </>
    )
}
export default UsearData