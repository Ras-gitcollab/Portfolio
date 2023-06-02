import React from "react";
import AboutDetails from "./aboutDetails";
import InterestCard from "./interestCard";
function About() {
  return (
    <div
      style={{
        backgroundColor: "#A7C7E7",
        height: "100vh",
        justifyContent: "center",
        display: "flex",
        overflow:"auto"
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
        <h3>About</h3>
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
            gap: "40px",
            margin: "20px",
          }}
        >
          <div>
            <img
              src="/profile.jpg"
              alt="Profile"
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%",
              }}
            ></img>
          </div>
          <div>
            <p
              style={{
                fontSize: "18px",
                textAlign: "justify",
              }}
            >
              I am a computer science student with a passion for technology. I
              am a final year undergraduate student at Chandigarh University,
              where I am majoring in Computer Science and Engineering.I am also
              an active member of the university's computer science club, where
              I have held several leadership positions.
              <br />
              <br />I am eager to start my career and I am confident that I can
              make a significant contribution to the tech industry. I am a
              valuable asset to any team and I am excited to see what the future
              holds.
            </p>
            <AboutDetails />
          </div>
        </div>
        <div>
          <h3>Interests</h3>
          <hr
            style={{
              height: "2px",
              color: "black",
              backgroundColor: "black",
              width: 150,
              marginLeft: "0",
              alignContent: "center",
            }}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 60,
              margin: 20,
              padding: 10
            }}
          >
            <InterestCard Value="Software Development" imgLink="SD.png"/>
            <InterestCard Value="Web Development" imgLink="Web.png"/>
            <InterestCard Value="Android Development" imgLink="Android.png"/>
            <InterestCard Value="Machine Learning" imgLink="ML.png"/>
            <InterestCard Value="Databases" imgLink="DB.png"/>
            <InterestCard Value="UI/UX" imgLink="UI.png"/>
            <InterestCard Value="Software Engineering" imgLink="Eng.png"/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
