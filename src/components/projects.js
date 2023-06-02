import ProjectCard from "./projectcard";

function Projects() {
  return (
    <div
      style={{
        backgroundColor: "#A7C7E7",
        // height: "100vh",
        justifyContent: "center",
        display: "flex",
        overflow: "auto",
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
        <h3>Projects</h3>
        <hr
          style={{
            height: "2px",
            color: "black",
            backgroundColor: "black",
            marginLeft: "0",
          }}
        />
        <ProjectCard />
      </div>
    </div>
  );
}
export default Projects;
