import React from 'react';
import {Container, Grid, Typography} from "@material-ui/core";
import LoadingHOC from '../../../common/HOC/LoadingHOC';
import InvoicePO from '../../../common/Invoice_Purchase/InvoicePO';

/**
 * @file Order History view Component
 * @author MinhL4m
 * @version 1.0
 */

const containerStyle = {
  marginTop: "1rem",
  marginBottom: "4rem"
};
const titleStyle = {
  textAlign: "center"
};

const OrderHistoryComponent = ({list}) => {
  return (
    <Container maxWidth={false} style={containerStyle}>
      {list !== null && list.length > 0 ? (
        <Grid container spacing={2}>
          {list.map((invoice) => (
            <InvoicePO
              title="Invoice #"
              invoiceNum={invoice.invoiceNum}
              total={invoice.total}
              date={invoice.date}
              url={`/client/invoice/${invoice.invoiceNum}`}
            />
          ))}
        </Grid>
      ) : (
        <Typography variant={"h4"} style={titleStyle}>
          There are no current order history
        </Typography>
      )}
    </Container>
  );
};

const OrderHistory = (props) => {
  return LoadingHOC(OrderHistoryComponent)({...props, message: 'something went wrong with loading order history'});
};

export default OrderHistory;
