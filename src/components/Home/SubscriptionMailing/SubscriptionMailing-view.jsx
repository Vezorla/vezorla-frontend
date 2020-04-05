import React from "react";
import {Button, Container, makeStyles, Typography} from "@material-ui/core";
import EmailInput from "../../common/Inputs/Email/EmailInput";

const useStyles = makeStyles(theme => ({
  containerMain: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    width: "100%"
  },
  email: {
    [theme.breakpoints.up("xs")]: {
      margin: "1vh 0",
      width: "50vw",
      alignSelf: "center"
    },
    [theme.breakpoints.up("md")]: {
      width: "30vw"
    }
  },
  button: {
    [theme.breakpoints.up("xs")]: {
      width: "50vw"
    },
    [theme.breakpoints.up("md")]: {
      width: "30vw"
    }
  }
}));

export default function SubscriptionMailing({email, message, setEmail, handleSubscribe}) {
  const classes = useStyles();

  return (
    <Container
      className={classes.containerMain}
      maxWidth={"false"}
    >
      <Typography
        align={"center"}
        variant={"body1"}
        className={classes.title}
      >
        Get notified about the healthy benefits of olive oil, upcoming products, promotions and more.
      </Typography>
      <EmailInput
        onChange={setEmail}
        value={email}
        className={classes.email}
      />
      <Button
        variant={"contained"}
        color={"primary"}
        onClick={handleSubscribe}
        className={classes.button}
      >
        subscribe
      </Button>
    </Container>
  );
}