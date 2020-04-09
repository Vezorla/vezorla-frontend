import React from 'react';
import InputGroupRequired from '../../../common/Inputs/NecessaryInput/InputGroupRequired';
import LoadingHOC from '../../../common/HOC/LoadingHOC';
import {Button, Container, FormControlLabel, Switch} from '@material-ui/core';

/**
 * @file Info Component
 * @author MinhL4m
 * @version 1.0
 */

const containerStyle = {
	textAlign: "center"
};
const buttonStyle = {
  margin: "1rem 0"
};

const InfoComponent = ({
                         info,
                         setFirstname,
                         setLastname,
                         setPhone,
                         setAddress,
                         setCity,
                         setProvince,
                         setPostalCode,
                         setCountry,
                         setPassword,
                         setSubscription,
                         onClick
                       }) => {
  return (
    <Container maxWidth={"sm"} style={containerStyle}>
      <InputGroupRequired
        info={info}
        setAddress={setAddress}
        setCity={setCity}
        setCountry={setCountry}
        setFirstname={setFirstname}
        setLastname={setLastname}
        setPassword={setPassword}
        setPhone={setPhone}
        setPostalCode={setPostalCode}
        setProvince={setProvince}
        disbaledEmail={true}
      />
      <FormControlLabel
        control={<Switch checked={info.subscription} onChange={setSubscription} color="primary"/>}
        label="Subscription to mailing list"
        labelPlacement="start"
      />
      <Button
        variant="contained"
        color={"primary"}
        fullWidth
        onClick={onClick}
        style={buttonStyle}
      >
        Save
      </Button>
    </Container>
  );
};

const Info = (props) => {
  return LoadingHOC(InfoComponent)({...props, message: 'something went wrong with loading information'});
};

export default Info;
