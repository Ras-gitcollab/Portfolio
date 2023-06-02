import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function EduCard(props) {
  return (
    <Card sx={{ maxWidth: 460 }} style={{
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
    }}>
      <CardMedia component="img" height="150" image={props.imgLink} />
      <CardContent style={{ backgroundColor: "#0047AB", color: "white" }}>
        <Typography variant="h6">
          <b>{props.name}</b>
        </Typography>
        <Typography
          style={{
            fontSize: 13,
          }}
        >
          <i>{props.address}</i>
        </Typography>
        <Typography>{props.degree}</Typography>
        <div  style={{
            display:"flex",
            justifyContent:"space-between",
            justifyItems:"center"
        }}>
        <Typography>
          <b>{props.duration}</b>
        </Typography>
        <Typography style={{
            fontSize: 13,
          }}><i>{props.result}</i></Typography>
        </div>
      </CardContent>
    </Card>
  );
}
export default EduCard;
