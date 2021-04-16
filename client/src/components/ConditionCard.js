import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

function ConditionCard(props) {
  const useStyles = makeStyles(() => ({
    root: {
      marginTop: 10,
    },
    media: {
      height: 500,
      width: "100%",
    },
    placeholderImage: {
      width: "100%",
      height: 500,
    },
  }));
  const classes = useStyles();
  const {
    value: { image, label, snippet },
  } = props;

  const Image = (props) => {
    return (
      <img
        className={classes.media}
        src={props.image || "logo192.png"}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "http://localhost:3000/logo192.png";
        }}
      />
    );
  };

  return (
    <>
      <Card className={classes.root}>
        <Image image={image} label={label} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {label}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {snippet}
          </Typography>
        </CardContent>
      </Card>
      <Divider />
    </>
  );
}

export default ConditionCard;
