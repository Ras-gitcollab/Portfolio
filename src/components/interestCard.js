function InterestCard(props) {
  return (
    <div
      style={{
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        padding: 10,
        backgroundColor: "#0047AB",
        width: 200,
        color: "white",
        display: "flex",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "center",
        justifyItems: "center",
        flex: 1,
        marginRight: "10px",
      }}
    >
      <img src={props.imgLink} alt="SD" style={{ maxWidth: "50px" }} />
      <div
        style={{
          width: 150,
          justifyContent: "center",
          justifyItems: "center",
          display: "flex",
          textAlign: "center",
        }}
      >
        <p>{props.Value}</p>
      </div>
    </div>
  );
}
export default InterestCard;
