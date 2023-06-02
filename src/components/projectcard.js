function ProjectCard() {
  return (
    <>
    <div
      style={{
        // backgroundColor:"red",
        padding: 20,
        margin: 10,
        borderRadius: 20,
        display: "flex",
        justifyContent: "space-between",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        alignItems:"center"
      }}
    >
      <div style={{
        margin:10
      }}>
        <h2
          style={{
            margin: 5,
          }}
        >
          Portfolio Web App
        </h2>
        <p
          style={{
            marginTop: "0",
            marginLeft: 5,
            fontSize: 13,
          }}
        >
          <i>April 2023 - May 2023</i>
        </p>
        <ul
          style={{
            textAlign: "justify",
          }}
        >
          <li>
            Created a responsive Portfolio web project in ReactJS, incorporating 
              React Router for seamless page navigation and enhancing the user
            experience.
          </li>
          <li>
            Utilized Material-UI to implement a modern and visually appealing
            design, including the use of Material-UI's Card component for
            presenting project details.
          </li>
          <li>
            Implemented dynamic content rendering using arrays and the map
            method, allowing for easy scalability and iteration of components.
          </li>
          <li>
            Applied CSS styling techniques to customize the portfolio's
            appearance, ensuring a cohesive and professional presentation
          </li>
        </ul>
        <p>Technology Used: <b>ReactJS, Router, MaterialUI, CSS</b></p>
      </div>
      <div>
        <img
          src="portf.png"
          alt="portfolio"
          style={{
            width: 450,
            height: 225,
            borderRadius: 20,
            border: "1px solid #0047AB",
          }}
        />
      </div>
      
    </div>
    <div
      style={{
        // backgroundColor:"red",
        padding: 20,
        margin: 10,
        borderRadius: 20,
        display: "flex",
        justifyContent: "space-between",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        alignItems:"center"
      }}
    >
      <div style={{
        margin:10
      }}>
        <h2
          style={{
            margin: 5,
          }}
        >
          Weather Forecasting App
        </h2>
        <p
          style={{
            marginTop: "0",
            marginLeft: 5,
            fontSize: 13,
          }}
        >
          <i>December 2022 - January 2023</i>
        </p>
        <ul
          style={{
            textAlign: "justify",
          }}
        >
          <li>
          Built a weather forecasting web app using OpenWeatherMap API
          </li>
          <li>
          Location-based feature retrieves real-time data for user's current location through coordinates
          </li>
          <li>
          Demonstrated web development and API integration skills.
          </li>
         
        </ul>
        <p>Technology Used: <b>: NodeJS, HTML, CSS, and JavaScript.</b></p>
      </div>
      <div>
        <img
          src="weather.png"
          alt="portfolio"
          style={{
            width: 450,
            height: 225,
            borderRadius: 20,
            border: "1px solid #0047AB",
          }}
        />
      </div>
      
    </div>
    <div
      style={{
        // backgroundColor:"red",
        padding: 20,
        margin: 10,
        borderRadius: 20,
        display: "flex",
        justifyContent: "space-between",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        alignItems:"center"
      }}
    >
      <div style={{
        margin:10
      }}>
        <h2
          style={{
            margin: 5,
          }}
        >
          Emotion Detector Using Python
        </h2>
        <p
          style={{
            marginTop: "0",
            marginLeft: 5,
            fontSize: 13,
          }}
        >
          <i>August 2022 - December 2022</i>
        </p>
        <ul
          style={{
            textAlign: "justify",
          }}
        >
          <li>
          Developed emotion detector using Python and ML to classify text inputs.
          </li>
          <li>
          Achieved high accuracy in emotional analysis results through model training. 
          </li>
          <li>
          Demonstrated NLP and programming skills while working on project.
          </li>
          
        </ul>
        <p>Technology Used: <b>Python, Pandas, NumPy, NLP.</b></p>
      </div>
      <div>
        <img
          src="emotn.png"
          alt="emotion"
          style={{
            width: 450,
            height: 225,
            borderRadius: 20,
            border: "1px solid #0047AB",
          }}
        />
      </div>
      
    </div>
    </>
  );
}
export default ProjectCard;
