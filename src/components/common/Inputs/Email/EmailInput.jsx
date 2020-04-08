import React from 'react';

import {InputAdornment, TextField} from '@material-ui/core';
import {Email} from "@material-ui/icons";

var emailValid = true;

/**
 * @file Email Input Component
 * @author MinhL4m
 * @version 1.0
 */

export default function EmailInput({
                                     value,
                                     onChange,
                                     helperText = 'Email is invalid',
                                     disabled = false,
                                     className = '',
                                     required = false
                                   }) {
  const emailHandler = (e) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    emailValid = regex.test(e.target.value.toLowerCase()) || e.target.value === '';
    onChange(e.target.value);
  };

  return (
    <TextField
      required={required}
      label="Email"
      error={!emailValid}
      helperText={emailValid ? '' : helperText}
      value={value}
      onChange={disabled ? () => {
      } : emailHandler}
      disabled={disabled}
      className={className}
      InputProps={{
        startAdornment: (
          <InputAdornment position={"start"}>
            <Email/>
          </InputAdornment>
        ),
      }}
    />
  );
}
