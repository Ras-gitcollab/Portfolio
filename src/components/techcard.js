function TechCard(props) {
  return (
    <div
      style={{
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        margin: 10,
        padding: 6,
        backgroundColor: "#0047AB",
        color: "black",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: 10,
        }}
      >
        <h2>{props.title}</h2>
        <div>
          {props.langList.map((image) => (
            <img src={image} alt="img" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechCard;
