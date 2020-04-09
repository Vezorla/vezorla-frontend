import React from 'react';
import {Button, Container, Typography} from '@material-ui/core';
import LoadingHOC from '../../../common/HOC/LoadingHOC';
import InputGroupRequired from '../../../common/Inputs/NecessaryInput/InputGroupRequired';
import PopUp from '../../../common/PopUp/PopUp';
import {makeStyles} from "@material-ui/core/styles";
import globalStyles from "../../../../assets/styles/styles";

/**
 * @file Client Info View Componenet
 * @author MinhL4m
 * @version 1.0
 */

const useStyle = makeStyles(theme => ({
  container: {
    textAlign: "center"
  },
  button: {
    margin: "1rem 0"
  }
}));

function ClientInfoComponent(
  {
    info,
    message,
    error,
    success,
    reseted,
    setFirstname,
    setLastname,
    setPhone,
    setAddress,
    setCity,
    setProvince,
    setPostalCode,
    setCountry,
    onSave,
    onReset,
    setError,
    setReset,
    goBack
  }) {
  const styles = useStyle();
  const classesGlobal = globalStyles();

  return (
    <Container maxWidth={"sm"} className={styles.container}>
      {error ? <PopUp label="Error" message={message} onClose={setError} handleOk={setError}/> : ''}
      {success ? <PopUp label="Success" message={message} onClose={goBack} handleOk={goBack}/> : ''}
      {reseted ? <PopUp label="Reset" message={message} onClose={setReset} handleOk={setReset}/> : ''}
      <Typography variant="h4" gutterBottom>
        Client Type: {info.accountType === 'C' ? 'Client' : 'Admin'}
      </Typography>
      <InputGroupRequired
        info={info}
        setAddress={setAddress}
        setCity={setCity}
        setCountry={setCountry}
        setFirstname={setFirstname}
        setLastname={setLastname}
        setPhone={setPhone}
        setPostalCode={setPostalCode}
        setProvince={setProvince}
        disabledEmail={true}
      />
      <Button
        variant="contained"
        onClick={onReset}
        color={"primary"}
        fullWidth
        className={styles.button}
      >
        Reset Password
      </Button>
      <Container disableGutters className={classesGlobal.containerButtons}>
        <Button
          variant="contained"
          color={"primary"}
          onClick={onSave}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color={"primary"}
          onClick={goBack}
        >
          Cancel
        </Button>
      </Container>
    </Container>
  );
}

export default function ClientInfo(props) {
  return LoadingHOC(ClientInfoComponent)({...props});
}
