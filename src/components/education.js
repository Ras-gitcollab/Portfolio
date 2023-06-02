import React from "react";
import EduCard from "./educard";
const Education = () => {
  return (
    <div
      style={{
        backgroundColor: "#A7C7E7",
        height: "100vh",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          padding: 10,
          width: "75%",
          margin: 20,
          color: "black",
        }}
      >
        <h3>Education</h3>
        <hr
          style={{
            height: "2px",
            color: "black",
            backgroundColor: "black",
            marginLeft: "0",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop:20
          }}
        >
          <EduCard 
            name="Chandigarh University"
            address="Gharuan, Punjab"
            degree="B.E. in Computer Science & Engineering"
            duration="July 2019 - June 2023"
            result="8.09 CGPA"
            imgLink="CU.png"
          />
           <EduCard 
            name="St. Francis Inter College"
            address="Hathras, Uttar Pradesh"
            degree="Higher Secondary School"
            duration="July 2017 - June 2018"
            result="86%"
            imgLink="Francis.png"
          />
            <EduCard 
            name="St. Francis Inter College"
            address="Hathras, Uttar Pradesh"
            degree="Senior Secondary School"
            duration="July 2015 - June 2016"
            result="8.8 CGPA"
            imgLink="Francis.png"
          />
        </div>
      </div>
    </div>
  );
};
export default Education;
