import React from "react";
import {Typography, makeStyles, useTheme} from "@material-ui/core";

// const theme = useTheme();

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    width: "100%"
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