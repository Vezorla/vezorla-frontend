import React from 'react';
import {Button, Container, FormControl, makeStyles, Typography} from '@material-ui/core';
import EmailInput from '../../../common/Inputs/Email/EmailInput';
import PopUp from '../../../common/PopUp/PopUp';
import {Link} from "react-router-dom";

/**
 * @file Email Input Componenet
 * @author MinhL4m
 * @version 1.0
 */

const useStyles = makeStyles(theme => ({
  containerCentered: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    margin: "1rem 0"
  },
  remembered: {
    margin: "1rem 0",
    textAlign: "center"
  },
}));

export default function EmailEnter({value, onChange, onClick, helperText, error, setError}) {
  const classes = useStyles();

  return (
    <Container disableGutters className={classes.containerCentered}>
      {error === true ? <PopUp message="Email is not registered" handleOk={setError} onClose={setError}/> : ''}
      <Typography variant="h4" gutterBottom>
        Forgot Password?
      </Typography>
      <Typography>
        Enter the email address associated with your account
      </Typography>
      <FormControl fullWidth margin={"normal"}>
        <EmailInput
          value={value}
          onChange={onChange}
          helperText={helperText}/>
      </FormControl>
      <Button
        onClick={onClick}
        variant="contained"
        color={"primary"}
        size="large"
        fullWidth
        className={classes.button}
      >
        reset password
      </Button>
      <Typography
        component={Link}
        to={"/login"}
        className={classes.remembered}
      >
        I remembered my password
      </Typography>
    </Container>
  );
}
