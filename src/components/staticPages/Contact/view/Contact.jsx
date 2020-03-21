import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  makeStyles,
  Button
} from "@material-ui/core";

import EmailInput from '../../../common/Inputs/Email/EmailInput'

// #D0C50A, #0C3658

const useStyles = makeStyles(theme => ({
  input: {
    width: "100%",
    marginBottom: "1em"
  },
  card: {
    width: "80vw",
    maxheight: "50vh",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "0.25em"
  },
  button: {
    width: "35%",
    height: "3em",
    boxShadow: ".1em .25em .25em rgba(0,0,0,0.2), 0 1em 1em rgba(0,0,0,0.1)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)"
  },
  content: {
    // marginBottom: '3em'
  },
  root: {
    [`@media screen and (orientation: portrait)`]: {
      marginTop: "10vh",
      marginBottom: "10vh"
    },
    [`@media screen and (orientation: landscape)`]: {
      marginTop: "18vh",
      marginBottom: "18vh"
    }
  }
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
    <div style={{ marginTop: "6em" }} className={classes.root}>
      <Typography paragraph={true} variant="h3" align="center" justify="center">
        Contact Us
      </Typography>
      <Card className={classes.card} variant="outlined" justify="center">
        <CardContent className={classes.content}>
          <TextField
            id="standard-basic"
            label="Name"
            className={classes.input}
            value={name}
            onChange={setName}
          ></TextField>
          <br></br>
          <EmailInput className={classes.content}></EmailInput>
        </CardContent>
        <CardContent className={classes.content}>
          <TextField
            placeholder="Type your message here. We will receive an e-mail and get back to you as soon as possible."
            multiline
            rows="6"
            className={classes.input}
            label="Message"
            value={message}
            onChange={setMessage}
          ></TextField>
        </CardContent>
        <CardContent align="center" className={classes.content}>
          <Button
            href=""
            color="#0C3658"
            style={{ backgroundColor: "#D0C50A" }}
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
