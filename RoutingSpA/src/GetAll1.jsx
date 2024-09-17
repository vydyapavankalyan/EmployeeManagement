import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const GetAll1 = () => {
  
  const [arr, setArr] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:2025/getAll");
      setArr(response.data);

    } catch (error) {
      console.error('Error fetching data:', error);
  
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
   <div>
     <center><div className='d-flex justif-content-end'>
       <Link to="/" className='btn btn-success'> Add+</Link> </div></center>
    <div style={{ padding: '20px' }}>
     
      <table border={1} style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee Name</th>
         
            <th>Employee Salary</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {arr.map((item) => {
            const { empid, empname, address, salary } = item; 
            return (
              <tr key={empid}>
                <td>{empid}</td>
                <td>{empname}</td>
               
                <td>{salary}</td>
                <button className='btn btn-sm btn-primary me'>
                <Link to="/update" className='btn btn-success'> Edit</Link></button>
                <button className='btn btn-sm btn-primary me'>
                <Link to="/delete" className='btn btn-success'> Delete</Link> </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default GetAll1;
