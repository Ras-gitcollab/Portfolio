import ContactCard from "./contactcard";

function Contact() {
  let addr = ["Marathahalli", "560037, Bangalore", "Karnataka, India"];
  let eml = ["rashikajaggi999@gmail.com", "19bcs1216@gmail.com"];
  let cts = ["+91 8880067892", "+91 7770077700"];
  let scl = ["LinkedIn", "GitHub"];
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
        <h3>Contact</h3>
        <hr
          style={{
            height: "2px",
            color: "black",
            backgroundColor: "black",
            marginLeft: "0",
          }}
        />
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <ContactCard items={addr} lg="add2.png" title="Address" />
            <ContactCard items={eml} lg="mail1.png" title="Email" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <ContactCard items={cts} lg="phone1.png" title="Contact" />
            <ContactCard items={scl} lg="share1.png" title="Social Profiles" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
