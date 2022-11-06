import "./portfolioCard.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../../../global.scss";

export default function PortfolioCard({ id, title, text, link, gitLink }) {
  return (
    <Card className={`card`} sx={{ maxWidth: 250, minWidth:250, borderRadius: 100 }}>
      <CardMedia
        component="img"
        height="200"
        width="200"
        image={`../../../images/${id}.gif`}
        alt="Card Content Coming Soon"
      />
      <CardContent className="card-bottom">
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
        className={`${!link && "noBtn"}`}
          target="_blank"
          href={link}
          sx={{
            backgroundColor: "#213458",
            fontSize: ".7rem",
            marginRight: "3px",
          }}
          variant="contained"
          size="small"
        >
          Visit Project
        </Button>
        <Button
          className={`${!gitLink && "noBtn"}`}
          href={gitLink}
          target="_blank"
          sx={{ backgroundColor: "#213458", fontSize: ".7rem" }}
          variant="contained"
          size="small"
        >
          {" "}
          See on Github{" "}
        </Button>
      </CardActions>
    </Card>
  );
}
