import React from 'react';
import {Link} from "react-router-dom";
import {Button, Container, makeStyles, Typography} from "@material-ui/core";
import {ArrowBack} from '@material-ui/icons';
import InvoiceDetail from '../../../common/Invoice_Purchase/InvoiceDetail';
import globalStyles from "../../../../assets/styles/styles";

/**
 * @file ViewInvoice View component
 * @author MinhL4m
 * @version 1.0
 */

const useStyles = makeStyles(theme => ({
  row: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "baseline"
  },
  button: {
    margin: "1rem 0"
  }
}));

export default function ViewInvoice(
  {
    invoiceNum,
    date,
    list,
    subtotal,
    taxes,
    total,
    discount
  }) {
  const styles = useStyles();
  const stylesGlobal = globalStyles();

  return (
    <Container className={stylesGlobal.containerMain}>
      <Container className={styles.row}>
        <Typography variant={"h5"} gutterBottom>
          Invoice #{invoiceNum}
        </Typography>
        <Typography variant={"h6"}>
          {date}
        </Typography>
      </Container>
      <InvoiceDetail
        list={list}
        subtotal={subtotal}
        taxes={taxes}
        total={total}
        discount={discount}/>
      <Button
        variant={"contained"}
        color={"primary"}
        component={Link}
        // TODO: link to list of invoices
        to={"/client/account"}
        className={styles.button}
        fullWidth
        startIcon={<ArrowBack/>}
      >
        Back
      </Button>
    </Container>
  );
}
