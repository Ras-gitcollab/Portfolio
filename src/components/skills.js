import TechCard from "./techcard";

function Skills(){
    let lang=["c.svg","python.svg","cpp.svg","html.svg","js.svg","java.svg","css.svg"];
    let frwDB=["nodejs.svg","reactjs.svg","mysql.svg","mongodb.svg"];
    let tls=["git.svg","jupyter.svg","vscode.svg","as.svg","post.svg"];
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
          <h3>Skills</h3>
          <hr
            style={{
              height: "2px",
              color: "black",
              backgroundColor: "black",
              marginLeft: "0",
            }}
          /> 
          {/* <SkillsCard/>                    */}
          <TechCard 
            langList={lang}
            title="Languages"
          />
          <TechCard 
            langList={frwDB}
            title="Frameworks & Databases"
          />
          <TechCard 
            langList={tls}
            title="Tools"
          />
        </div>
        
      </div>
    );
}
export default Skills;