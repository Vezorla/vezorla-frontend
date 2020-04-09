import React from 'react';
import {
  Button,
  Container,
  makeStyles,
  Typography
} from '@material-ui/core';
import {ArrowBack, AttachMoney, Email, Event, Home, Person, Phone} from '@material-ui/icons';
import LoadingHOC from '../../../common/HOC/LoadingHOC';
import globalStyles from "../../../../assets/styles/styles";
import {Link} from "react-router-dom";

/**
 * @author MinhL4m
 * @version 1.0
 */

const useStyle = makeStyles(theme => ({
  container: {
    marginTop: "1rem",
    marginBottom: "4rem"
  },
  cardContent: {
    textAlign: "center"
  },
  row: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "0.5rem 0"
  },
  icon: {
    marginRight: "0.5rem"
  },
  button: {
    margin: "1rem 0"
  }
}));

function SaleInfoComponent(
  {
    invoiceNum = '',
    date = new Date(),
    shippingCost,
    subtotal,
    discount,
    taxes,
    total,
    email,
    firstName,
    lastName,
    phoneNum,
    address,
    postalCode
  }) {
  const styles = useStyle();
  const stylesGlobal = globalStyles();

  return (
    <Container maxWidth={"sm"} className={styles.container}>
      <Typography variant="h4" align={"center"} gutterBottom>
        Invoice #{invoiceNum}
      </Typography>
      <Container disableGutters className={styles.row}>
        <Event color={"secondary"} className={styles.icon}/>
        <Typography>
          {date.toString()}
        </Typography>
      </Container>
      <Container disableGutters className={styles.row}>
        <Email color={"secondary"} className={styles.icon}/>
        <Typography>
          {email}
        </Typography>
      </Container>
      <Container disableGutters className={styles.row}>
        <Person color={"secondary"} className={styles.icon}/>
        <Typography>
          {firstName} {lastName}
        </Typography>
      </Container>
      <Container disableGutters className={styles.row}>
        <Home color={"secondary"} className={styles.icon}/>
        <Container disableGutters>
          <Typography>
            {address}
          </Typography>
          <Typography>
            {postalCode}
          </Typography>
        </Container>
      </Container>
      <Container disableGutters className={styles.row}>
        <Phone color={"secondary"} className={styles.icon}/>
        <Typography gutterBottom>
          {phoneNum}
        </Typography>
      </Container>
      <Container disableGutters>
        <Typography>
          Subtotal: ${subtotal}
        </Typography>
        <Typography>
          Discount: ${discount}
        </Typography>
        <Typography>
          Tax: ${taxes}
        </Typography>
        <Typography>
          Shipping: ${shippingCost}
        </Typography>
      </Container>
      <Container disableGutters className={styles.row}>
        <AttachMoney color={"secondary"} className={styles.icon}/>
        <Typography variant={"h6"}>
          <b>{total}</b>
        </Typography>
      </Container>
      <Button
        variant={"contained"}
        color={"primary"}
        component={Link}
        to={"/admin/sales"}
        className={styles.button}
        fullWidth
        startIcon={<ArrowBack/>}
      >
        Back
      </Button>
    </Container>
  );
}

export default function SaleInfo(props) {
  return LoadingHOC(SaleInfoComponent)({...props});
}
