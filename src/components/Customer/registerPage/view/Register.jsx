import React from 'react';
import {Button, Container, FormControl, TextField, Typography} from '@material-ui/core';
import EmailInput from '../../../common/Inputs/Email/EmailInput';

/**
 * @file Register View Component
 * @author MinhL4m
 * @version 1.0
 */

/**
 * Register View Component
 * @param {string} firstname - value of firstname TextField
 * @param {string} lastname - value of lastname TextField
 * @param {string} email - value of the email TextField
 * @param {string} password - value of password TextField
 * @param {string} rePassword - value of rePassword TextField
 * @param {function} setFirstname - function to change the value of firstname
 * @param {function} setLastname - function to change the value of lastname
 * @param {function} setEmail - function to change the value of email
 * @param {function} setPassword - function to change the value of password
 * @param {function} setRePassword - function to change the value of repassword
 * @param {function} match - function to check if repassword and password match
 * @returns Register Component
 */
export default function Register(
  {
    email,
    setEmail,
    password,
    setPassword,
    rePassword,
    setRePassword,
    match
  }) {
  return (
    <Container disableGutters>
      <Typography variant="h4">
        Registration
      </Typography>
      <FormControl fullWidth margin={"normal"}>
        <EmailInput
          helperText="Invalid Email"
          value={email}
          onChange={setEmail}
        />
      </FormControl>
      <FormControl fullWidth margin={"normal"}>
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
        />
      </FormControl>
      <FormControl fullWidth margin={"normal"}>
        <TextField
          label="Confirm Password"
          type="password"
          value={rePassword}
          onChange={setRePassword}
          error={!match}
          helperText={match ? '' : 'Unmatch password'}
        />
      </FormControl>
    </Container>
  );
}
