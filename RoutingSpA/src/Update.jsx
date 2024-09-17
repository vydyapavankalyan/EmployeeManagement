import { useState, useRef } from 'react';
import axios from 'axios';

const Update = () => {
    const [res, setRes] = useState({});

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);


    const updateEx = async () => {
      

        try {
            const response = await axios.put(`http://localhost:2025/employees/update/${ref1.current.value}`, {
                empname: ref2.current.value,
                salary: ref3.current.value
            });

          
            setRes(response.data);
        } catch (error) {
            console.error("Error updating employee:", error);
            setRes({ error: error.message });
        }

       
    };
    
    const updataHandle=(e)=>{
        e.preventDefault();
        updateEx();
    }

    return (
        <div style={{ textAlign: "center", border: "double", borderColor: "red", margin: "50px auto", width: "50%" }}>
            <div>
                Employee Id: <input type="text" ref={ref1} /><br /><br />
                Employee Name: <input type="text" ref={ref2} /><br /><br />
                Employee Salary: <input type="text" ref={ref3} /><br /><br />
                <button onClick={updataHandle}>Update</button>
                <p>{JSON.stringify(res)}</p>
            </div>
        </div>
    );
};

export default Update;
