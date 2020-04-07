import React from 'react';
import LineItem from './LineItem';
import loadingHOC from '../../../common/HOC/LoadingHOC';
import {Container, makeStyles, Typography} from '@material-ui/core';
import globalStyles from "../../../../assets/styles/styles";

/**
 * @file Cart View Component
 * @author MinhL4m
 * @version 1.0
 */

const useStyles = makeStyles(theme => ({
  containerTop: {
    [theme.breakpoints.up("xs")]: {
      marginTop: "0.3rem",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "0",
    }
  },
  containerList: {
    padding: "1rem 0"
  }
}));

export default function Cart(props) {
  const classes = useStyles();
  const classesGlobal = globalStyles();

  const lineItemList = () => {
    return (
      <Container className={classes.containerTop}>
        <Typography
          variant={"h4"}
          align={"center"}
          gutterBottom
        >
          Your Cart
        </Typography>
        {props.outStockList.length !== 0 ? (
          <Container>
            <Typography variant="h5">
              Out of Stock Item
            </Typography>
            {props.outStockList.map((lineItem) => (
              <Container className={classes.containerList}>
                <Typography variant="h6">
                  {lineItem.name} out of stock by {lineItem.by}
                </Typography>
              </Container>
            ))}
          </Container>
        ) : (
          ''
        )}
        <Container disableGutters>
          <Typography variant="h5">
            In Stock Item
          </Typography>
          {props.inStockList.length !== 0 ? (
            <Container disableGutters className={classes.containerList}>
              {props.inStockList.map(
                (lineItem, index) =>
                  lineItem.quantity > 0 ? (
                    <LineItem
                      key={lineItem.prodID}
                      onDelete={props.onDelete}
                      onChange={props.onChange}
                      {...lineItem}
                      img={props.imgs[index]}
                      max={props.quantity[index]}
                    />
                  ) : (
                    ''
                  )
              )}
            </Container>
          ) : (
            <Typography variant="h4">
              Sorry for this inconvenience
            </Typography>
          )}
        </Container>
      </Container>
    );
  };

  const CartComponent = loadingHOC(lineItemList)({...props, message: 'Cannot get Cart'});
  return CartComponent;
}