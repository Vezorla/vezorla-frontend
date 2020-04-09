import React from 'react';
import {Container, makeStyles} from "@material-ui/core";
import EmailEnter from './EmailEnter';
import DoneForgotPass from './DoneForgotPass';

/**
 * @file Forgot Password view Componenet
 * @author MinhL4m
 * @version 1.0
 */

const useStyles = makeStyles(theme => ({
  containerMain: {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    textAlign: "center"
  },
}));

export default function ForgotPass(
  {
    success,
    value,
    onChange,
    onClick,
    helperText,
    error,
    setError
  }) {

  const classes = useStyles();

  return (
    <Container maxWidth={"sm"} className={classes.containerMain}>
      {success !== true ? (
        <EmailEnter
          value={value}
          onChange={onChange}
          onClick={onClick}
          helperText={helperText}
          error={error}
          setError={setError}
        />
      ) : (
        <DoneForgotPass email={value}/>
      )}
    </Container>
  );
}