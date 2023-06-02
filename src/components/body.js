import About from "./about";

function Body(){
    return(
        <div style={{backgroundColor:'#A7C7E7', height:'100vh',  justifyContent:"center", display:"flex"}}>
            <div style={{backgroundColor:"yellow",padding: 10, width:"75%", margin:20}}>
                <About/>
            </div>
        </div>

    );
}
export default Body;