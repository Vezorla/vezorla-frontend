import React from 'react';
import {Container, FormControl, makeStyles, TextField} from '@material-ui/core';
import EmailInput from '../../../common/Inputs/Email/EmailInput';
import PhoneInput from '../../../common/Inputs/Phone/PhoneInput';
import PostalCodeInput from '../../../common/Inputs/PostalCode/PostalCodeInput';

/**
 * @file  Required Information Input Component
 * @author MinhL4m
 * @version 1.0
 */

const useStyles = makeStyles(theme => ({
  formControl: {
    [theme.breakpoints.up("xs")]: {
      width: "100%"
    },
    [theme.breakpoints.up('sm')]: {
      width: "45%",
      marginRight: "1rem"
    }
  },
  container: {
    marginBottom: "1rem",
    textAlign: "start"
  }
}));

//Every setter accept event except PostalCode, Email, Phone
//They accept setter with new value as param
export default function InputGroupRequired(
  {
    info,
    setFirstname,
    setLastname,
    setEmail,
    setPhone,
    setAddress,
    setCity,
    setProvince,
    setPostalCode,
    setCountry,
    setPassword,
    disabled = false,
    disabledEmail = false,
    required = false
  }) {
  const classes = useStyles();

  return (
    <Container disableGutters className={classes.container}>
      <FormControl
        margin="normal"
        className={classes.formControl}
      >
        <TextField
          label="First Name"
          value={info.firstName}
          onChange={(e) => setFirstname(e)}
          required={required}
        />
      </FormControl>
      <FormControl
        margin="normal"
        className={classes.formControl}
      >
        <TextField
          label="Last Name"
          value={info.lastName}
          onChange={setLastname}
          required={required}
        />
      </FormControl>
      <FormControl
        margin="normal"
        className={classes.formControl}
      >
        <EmailInput
          value={info.email || ''}
          onChange={setEmail ? setEmail : (value) => {
          }}
          helperText="Invalid Email"
          disabled={disabledEmail}
          required={required}
        />
      </FormControl>
      <FormControl
        margin="normal"
        className={classes.formControl}
      >
        <PhoneInput
          value={info.phoneNum || ''}
          onChange={setPhone}
          helperText="Invalid Phone Number"
          required={required}
        />
      </FormControl>
      {/* ---Address--- */}
      <FormControl
        margin="normal"
        className={classes.formControl}
      >
        <TextField
          disabled={disabled}
          label="Address"
          value={info.address}
          onChange={setAddress}
        />
      </FormControl>
      <FormControl
        margin="normal"
        className={classes.formControl}
      >
        <TextField
          disabled={disabled}
          label="City"
          value={info.city}
          onChange={setCity}
        />
      </FormControl>
      <FormControl
        margin="normal"
        className={classes.formControl}
      >
        <TextField
          disabled={disabled}
          label="Province"
          value={info.province}
          onChange={setProvince}
        />
      </FormControl>
      <FormControl
        margin="normal"
        className={classes.formControl}
      >
        <PostalCodeInput
          // disabled={disabled}
          helperText="Invalid Postal Code"
          value={info.postalCode || ''}
          onChange={setPostalCode}
          required={required}
        />
      </FormControl>
      <FormControl
        margin="normal"
        className={classes.formControl}
      >
        <TextField
          disabled={disabled}
          label="Country"
          value={info.country}
          onChange={setCountry}
        />
      </FormControl>
      {/* --Password-- */}
      {info.password !== null && info.password !== undefined ? (
        <FormControl
          margin="normal"
          className={classes.formControl}
        >
          <TextField
            label="New Password"
            value={info.password}
            onChange={setPassword}
            type="password"
          />
        </FormControl>
      ) : (
        ''
      )}
    </Container>
  );
}
