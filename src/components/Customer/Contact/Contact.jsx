import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  makeStyles,
  Button
} from "@material-ui/core";

import EmailInput from '../../common/Inputs/Email/EmailInput'

const useStyles = makeStyles(theme => ({
  card: {
    width: "80vw",
    maxHeight: "50vh",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "0.25em",
    padding: "2.5%"
  },
  cardContent: {
    padding: "0px 8px 16px 8px"
  },
  input: {
    [theme.breakpoints.up('xs')]: {
      width: "100%"
    },
    [theme.breakpoints.up('sm')]: {
      width: "45%"
    },
    marginBottom: "1em"
  },
  /*button: {
    width: "35%",
    height: "3em",
    boxShadow: ".1em .25em .25em rgba(0,0,0,0.2), 0 1em 1em rgba(0,0,0,0.1)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)"
  }*/
}));

export default function Contact({
  name,
  email,
  message,
  error,
  setName,
  setEmail,
  setMessage,
  submitMessage
}) {
  const classes = useStyles();

  return (
    <div>
      <Typography paragraph={true} variant="h3" align="center" justify="center">
        Contact Us
      </Typography>
      <Card className={classes.card} variant="outlined">
        <CardContent className={classes.cardContent}>
          <TextField
            id="standard-basic"
            label="Name"
            className={classes.input}
            value={name}
            onChange={setName}
          />
        </CardContent>
        <CardContent className={classes.cardContent}>
          <EmailInput className={classes.input} value={email} onChange={setEmail} />
        </CardContent>
        <CardContent className={classes.cardContent}>
          <TextField
            placeholder="Type your message here to send a message. We will get back to you as soon as possible."
            multiline
            rows="6"
            className={classes.input}
            label="Message"
            value={message}
            onChange={setMessage}
          />
        </CardContent>
        <CardContent align="center" className={classes.cardContent}>
          <Button
            href=""
            variant={"contained"}
            color="primary"
            className={classes.button}
            onClick={submitMessage}
          >
            SEND
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
