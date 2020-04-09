import React from 'react';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';
import ProcessButtons from '../../../common/Stepper/ProcessButtons';
import LoadingHOC from '../../../common/HOC/LoadingHOC';
import Payment from '../logic/Payment';
import {makeStyles} from "@material-ui/core/styles";

/**
 * @file Review view Component
 * @author MinhL4m
 * @version 1.0
 */

const useStyles = makeStyles(theme => ({
  table: {
    marginBottom: "1rem"
  }
}));

const ReviewComponent = ({list, info, handleBack, setDone, setError, setLoading}) => {
  const classes = useStyles();

  return (
    <Container>
      <TableContainer component={Paper} className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Extended Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((lineItem) => (
              <TableRow key={lineItem.prodId}>
                <TableCell component={"th"} scope={"row"}>
                  {lineItem.name}
                </TableCell>
                <TableCell>
                  {lineItem.quantity}
                </TableCell>
                <TableCell>
                  {lineItem.price}
                </TableCell>
                <TableCell>
                  {lineItem.extendedPrice}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Container disableGutters>
        <Typography>
          Subtotal ${info.subtotal}
        </Typography>
        <Typography>
          Discount ${info.discount}
        </Typography>
        <Typography>
          Discounted Subtotal ${info.discounted_subtotal}
        </Typography>
        <Typography>
          Tax ${info.taxes}
        </Typography>
        <Typography gutterBottom>
          Shipping ${info.shipping}
        </Typography>
        <Typography>
          Total <b>${info.Total}</b>
        </Typography>
      </Container>
      <ProcessButtons handleBack={handleBack} complete={true} hasNext={true}/>
      <Payment
        total={info.Total}
        setDone={setDone}
        setError={setError}
        setLoading={setLoading}
      />
    </Container>
  );
};

export default function Review({list, info, setDone, setError, handleBack, stage, setLoading}) {
  return LoadingHOC(ReviewComponent)({
    list,
    info,
    handleBack,
    stage,
    setDone,
    setError,
    message: 'There was a problem retrieving the information',
    setLoading
  });
}
