import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Paper } from "@material-ui/core";
import Image from "material-ui-image";
import Link from "@material-ui/core/Link";

function ConditionCard(props) {
  const useStyles = makeStyles(() => ({
    root: {
      marginTop: 10,
    },
  }));
  const classes = useStyles();
  const {
    value: { image, label, snippet },
  } = props;

  const [state, setState] = useState({ expanded: false });
  const { expanded } = state;

  const ConditionImage = (props) => {
    return (
      <Paper variant="outlined">
        <Image src={props.image || "logo192.png"} />
      </Paper>
    );
  };

  const SnippetComponent = (props) => {
    const { snippet } = props;
    if (!snippet) {
      return null;
    }
    if (!expanded && snippet.length > 25) {
      const click = () => {
        setState((prevState) => ({
          ...prevState,
          expanded: true,
        }));
      };
      return (
        <>
          <Typography variant="body2" color="textSecondary" component="p">
            {snippet.substring(0, 25)}
          </Typography>
          <Link onClick={click} component="button">
            {" "}
            find out more
          </Link>
        </>
      );
    }
    return (
      <Typography variant="body2" color="textSecondary" component="p">
        {snippet}
      </Typography>
    );
  };

  return (
    <>
      <Card className={classes.root}>
        <ConditionImage image={image} label={label} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {label}
          </Typography>
          <SnippetComponent snippet={snippet} />
        </CardContent>
      </Card>
      <Divider />
    </>
  );
}

export default ConditionCard;
