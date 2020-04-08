import React from "react";
import {
  Button,
  Container,
  FormControl,
  makeStyles,
  Typography,
  TextField
} from "@material-ui/core";
import {Send} from '@material-ui/icons';
import EmailInput from "../../common/Inputs/Email/EmailInput";
import globalStyles from "../../../assets/styles/styles";

const useStyles = makeStyles(theme => ({
  textField: {
    [theme.breakpoints.up('xs')]: {
      width: "100%"
    },
    [theme.breakpoints.up('sm')]: {
      width: "50%"
    }
  }
}));

export default function Contact(
  {
    name,
    email,
    message,
    setName,
    setEmail,
    setMessage,
    handleSend
  }) {
  const classes = useStyles();
  const classesGlobal = globalStyles();

  return (
    <Container
      disableGutters
      className={classesGlobal.containerMain}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
      >
        Contact Us
      </Typography>
      <Container>
        <FormControl
          fullWidth
          margin="normal"
        >
          <TextField
            id="name-textfield"
            label="Name"
            fullWidth
            className={classes.textField}
            value={name}
            onChange={setName}
          />
        </FormControl>
        <FormControl
          fullWidth
          margin="normal"
        >
          <EmailInput
            className={classes.textField}
            value={email}
            onChange={setEmail}
            required
          />
        </FormControl>
        <FormControl
          fullWidth
          margin="normal"
        >
          <TextField
            id="message-textfield"
            label="Message"
            placeholder="Type your message here."
            multiline
            rows="6"
            fullWidth
            value={message}
            onChange={setMessage}
            required
          />
        </FormControl>
      </Container>
      <Container
        disableGutters
        className={classesGlobal.containerButtons}
      >
        <Button
          variant={"contained"}
          color="primary"
          onClick={handleSend}
          startIcon={<Send/>}
        >
          Send
        </Button>
      </Container>
    </Container>
  );
}
