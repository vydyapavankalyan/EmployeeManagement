import axios from "axios";
import React, { useRef, useState } from "react";

const Delete = () => {
  const [data, setData] = useState({});
  const ref1 = useRef(null);

  const Results = async () => {
    try {
      const getdata = await axios.delete(`http://localhost:2026/delete/${ref1.current.value}`);
      const deleteData = getdata.data;
      setData("Successful Delete +"+deleteData);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const Check = () => {
    Results();
  };

  return (
    <>
      <h1>Delete Form</h1>
      <input type="text" ref={ref1} />
      <button onClick={Check}>Delete</button>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default Delete;