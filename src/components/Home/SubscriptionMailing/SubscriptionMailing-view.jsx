import React from "react";
import {Box, Button, Container, makeStyles, Typography} from "@material-ui/core";
import EmailInput from "../../common/Inputs/Email/EmailInput";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    width: "100%"
  },
  email: {
    margin: "1vh 0",
    width: "50vw",
    alignSelf: "center"
  }
}));

export default function SubscriptionMailing({email, message, setEmail, handleClick}) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography
        align={"center"}
        color={"secondary"}
        variant={"h6"}
        className={classes.title}
      >
        Get notified about promotions and news
      </Typography>
      <EmailInput onChange={setEmail} value={email} className={classes.email}/>
      <Button variant={"contained"} color={"primary"} onClick={handleClick}>
        subscribe
      </Button>
      <Box>
        {message !== '' ?
          <Typography align={"center"} color={"error"} variant={"body2"}>
            {message}
          </Typography>
          : ''}
      </Box>
    </Container>
  );
}