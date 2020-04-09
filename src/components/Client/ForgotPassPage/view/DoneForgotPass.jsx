import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Container, makeStyles, Typography} from '@material-ui/core';
import {CheckCircle} from '@material-ui/icons';

/**
 * @file Done Page View Componenet
 * @author MinhL4m
 * @version 1.0
 */

const useStyles = makeStyles(theme => ({
  button: {
    margin: "1rem 0"
  }
}));

export default function DoneForgotPass({email}) {
  const classes = useStyles();

  return (
    <Container>
      <CheckCircle fontSize={"large"} htmlColor={"green"}/>
      <Typography variant="h4" gutterBottom>
        Check your email
      </Typography>
      <Typography>
        Use the new password sent to {email}
      </Typography>
      <Button
        variant={"contained"}
        color={"primary"}
        component={Link}
        to={"/login"}
        size={"large"}
        className={classes.button}
        fullWidth
      >
        sign in
      </Button>
    </Container>
  );
}
