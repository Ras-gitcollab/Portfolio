function ContactCard(props) {
  return (
    <div
      style={{
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        margin: 10,
        padding: 0,
        backgroundColor: "#0047AB",
        color: "white",
        width: "600px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: 50,
          marginLeft: 10,
        }}
      >
        <img
          src={props.lg}
          alt="add"
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "white",
            borderRadius: "50%",
            margin: 10,
            padding: 7,
          }}
        />
        <h3>{props.title}</h3>
      </div>
      <hr
        style={{
          margin: 0,
        }}
      />

      <div
        style={{
          marginLeft: 67,
          marginTop: 10,
          //    marginBottom:20,
          padding: 1,
          paddingBottom: 10,
          height: 60,
        }}
      >
        {props.items.map((item) => (
          <p style={{ margin: "0" }}>{item}</p>
        ))}
      </div>
    </div>
  );
}
export default ContactCard;
