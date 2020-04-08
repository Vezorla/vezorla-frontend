import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {
  Button,
  Container,
  FormControl,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core';
import EmailInput from '../../common/Inputs/Email/EmailInput';
import globalStyles from "../../../assets/styles/styles";

/**
 * @file Login View Componenet
 * @author MinhL4m
 * @version 1.0
 */

const useStyles = makeStyles(theme => ({
  containerMain: {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  containerCentered: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  containerButtons: {
    display: "flex",
    flexDirection: "column"
  },
  forgot: {
    margin: "1rem 0",
    textAlign: "center"
  },
  button: {
    margin: "1rem 0"
  }
}));

/**
 * Login Functional Component
 * @param {string} username - value of username textfield
 * @param {string} password - value of password textfield
 * @param {string} error - error that may occured during login process
 * @param {function} setUsername - function set username when user type
 * @param {function} setPassword - function set password when user type
 * @param {function} onClick - function handle submit username and password
 * @returns Login View Component
 */
export default function Login({email, password, error = '', setEmail, setPassword, onClick}) {
  React.useEffect(() => {
    const btn = document.querySelector('#login-btn');
    const pass = document.querySelector('#pass-textfield');
    const email = document.querySelector('.email-textfield');

    function enter(e) {
      if (e.keyCode === 13) {
        e.preventDefault();

        btn.click();
      }
    }

    pass.addEventListener('keyup', enter);
    email.addEventListener('keyup', enter);
    return () => {
      pass.removeEventListener('keyup', enter);
      email.removeEventListener('keyup', enter);
    };
  }, []);

  const classes = useStyles();
  const classesGlobal = globalStyles();

  return (
    <Container maxWidth={"sm"} className={classes.containerMain}>
      <Container disableGutters className={classes.containerCentered}>
        <Typography variant="h4">
          Welcome back
        </Typography>
        <FormControl fullWidth margin={"normal"}>
          <EmailInput
            className={"email-textfield"}
            helperText="Invalid Email"
            onChange={setEmail}
            value={email}/>
        </FormControl>
        <FormControl fullWidth margin={"normal"}>
          <TextField
            id={"pass-textfield"}
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}/>
        </FormControl>
        <Container disableGutters>
          {error !== '' ? (
            <Typography color={"error"}>
              {error}
            </Typography>
          ) : (
            ''
          )}
        </Container>
        <Button
          id={"login-btn"}
          variant="contained"
          color={"primary"}
          onClick={onClick}
          size="large"
          className={classes.button}
          fullWidth
        >
          Sign in
        </Button>
      </Container>
      <Container
        disableGutters
        className={classes.containerButtons}>
        <Button
          variant={"contained"}
          color={"secondary"}
          component={Link}
          to="/register"
          className={classes.button}
          size="large"
        >
          Sign up
        </Button>
        <Typography
          component={Link}
          to={"/forgot"}
          className={classes.forgot}
        >
          Forgot Password?
        </Typography>
      </Container>
    </Container>
  );
}