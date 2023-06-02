import ExpCard from "./expcard";

function Experience(){
    return(
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
          <h3>Experience</h3>
          <hr
            style={{
              height: "2px",
              color: "black",
              backgroundColor: "black",
              marginLeft: "0",
            }}
          />
          <div>
            <ExpCard/>
          </div>
        </div>
      </div>
    );
}
export default Experience;