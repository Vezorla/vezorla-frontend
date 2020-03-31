import React from "react";
import {Typography, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    padding: "0.5rem",
    maxWidth: "100%"
  }
}));

export default function Banner({text}) {
  const classes = useStyles();

  return (
    <Typography
      align={"center"}
      color={"secondary"}
      variant={"h6"}
      className={classes.root}
    >
      {text}
    </Typography>
  );
}