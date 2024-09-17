import axios from "axios";
import React, { useState, useRef } from "react";

const Update = () => {
  const [data, setData] = useState({});
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const Result = async () => {
    try {
      const update = await axios.put(`http://localhost:2026/update/${ref1.current.value}`, {
        empName: ref2.current.value,
        empEmail: ref3.current.value,
        empMobileNo: ref4.current.value,
        empAddress: ref5.current.value
      });
      const resultData = update.data;
      setData(resultData);
      
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const Check = () => {
    Result();
  };

  return (
    <>
      <div>
        <h1>Update Form</h1>
        <table>
          <tbody>
            <tr>
              <td>Employee Id:</td>
              <td><input type="text" ref={ref1} /></td>
            </tr>
            <tr>
              <td>Employee Name:</td>
              <td><input type="text" ref={ref2} /></td>
            </tr>
            <tr>
              <td>Employee Email:</td>
              <td><input type="email" ref={ref3} /></td>
            </tr>
            <tr>
              <td>Employee Mobile No:</td>
              <td><input type="text" ref={ref4} /></td>
            </tr>
            <tr>
              <td>Employee Address:</td>
              <td><input type="text" ref={ref5} /></td>
            </tr>
            <tr>
              <td><button onClick={Check}>Submit</button></td>
              <td><button type="reset">Clear</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default Update;