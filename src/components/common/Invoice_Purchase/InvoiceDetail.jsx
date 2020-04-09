import React from 'react';
import {
  Container,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@material-ui/core";

/**
 * @file Invoice Detail Componenet
 * @author MinhL4m
 * @version 1.0
 */

const useStyles = makeStyles(theme => ({
  table: {
    marginBottom: "1rem"
  }
}));

export default function InvoiceDetail({list, subtotal, taxes, total, discount}) {
  const classes = useStyles();

  return (
    <Container disableGutters>
      <TableContainer component={Paper} className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Unit Price</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((item) => (
              <TableRow key={item.prodId}>
                <TableCell component={"th"} scope={"row"}>
                  {item.name}
                </TableCell>
                <TableCell>
                  {item.qty}
                </TableCell>
                <TableCell>
                  {item.price}
                </TableCell>
                <TableCell>
                  {item.extendedPrice}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Container disableGutters>
        <Typography>
          Subtotal ${subtotal}
        </Typography>
        <Typography>
          Discount ${discount}
        </Typography>
        {/*<Typography>
          Discounted Subtotal ${}
        </Typography>*/}
        <Typography gutterBottom>
          Tax ${taxes}
        </Typography>
        {/*<Typography gutterBottom>
          Shipping ${}
        </Typography>*/}
        <Typography>
          Total <b>${total}</b>
        </Typography>
      </Container>
    </Container>
  );
}
