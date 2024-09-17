import React, { useRef, useState } from "react";

const StudentMarkes = () => {
    const HallNo = useRef("");
    const Name = useRef("");
    const Spring = useRef("");
    const SpringBoot = useRef("");
    const ReactJs = useRef("");

    
    const [totalMarkes, setTotalMarkes] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [grade, setGrade] = useState("");

    const StudentCheck = (e) => {
        e.preventDefault();

       
        const springMark = parseInt(Spring.current.value);
        const springBootMark = parseInt(SpringBoot.current.value);
        const reactJsMark = parseInt(ReactJs.current.value);

        const totalMarkes = springMark + springBootMark + reactJsMark;
        const percentage = (totalMarkes / 300) * 100;

        let grade = "";

        if (percentage >=80) {
            grade = "A Grade";
        } else if (percentage >=70) {
            grade = "B Grade";
        } else if (percentage >=60) {
            grade = "C Grade";
        } else if(percentage>=50) {
            grade = "D Grade";
        }
        else{
       (percentage>35)
       grade="Fail"
        }
    
        
        setTotalMarkes(totalMarkes);
        setPercentage(percentage);
        setGrade(grade);
    };

    return (
        <>
            <div>
                <form onSubmit={StudentCheck}>
                    HallTick_No:<input type="text" ref={HallNo} /><p></p>
                    Name:<input type="text" ref={Name} /><p></p>
                    Spring:<input type="text" ref={Spring} /><p></p>
                    Spring Boot:<input type="text" ref={SpringBoot} /><p></p>
                    React Js:<input type="text" ref={ReactJs} /><p></p>
                    <input type="submit" value="PrintMarks" /><p></p>
                </form>

            </div>
           <div>
           <h1>Name:{Name.current.value}</h1>
        
           </div>

            <div>
        
                <h1>Total Marks: {totalMarkes}</h1>
                <h1>Percentage: {percentage}%</h1>
                <h1>Grade: {grade}</h1>
            </div>
        </>
    );
};

export default StudentMarkes;
