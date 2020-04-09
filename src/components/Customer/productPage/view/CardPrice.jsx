import React from 'react';
import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

/**
 * @file CardPrice View Component
 * @author MinhL4m
 * @version 1.0
 */

/**
 * Card Price View Component
 * @param {price} - price of the product
 * @param {value} - user select quantity
 * @param {onChange} - handler for changing quantity
 * @param {onClick} - handler for add to cart
 */
const CardPriceComponent = ({price, value, max, onChange, onClick}) => {
  return (
    <Container style={{display: "flex", flexDirection: "column"}}>
      <Container style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
        <TextField
          id="standard-basic"
          label="Quantity"
          helperText={value > max || value < 0 ? max === 0 ? 'Out of stock' : 'Quantity is exceed what in stock' : ' '}
          type="number"
          value={max === 0 ? 0 : value}
          placeholder="Enter Quantity"
          error={value > max || value < 1 ? true : false}
          inputProps={{max: max, min: 1}}
          InputLabelProps={{shrink: true}}
          onChange={onChange}
        />
        <Typography>
          <b>${price}</b>
        </Typography>
      </Container>
      <Button
        color={"primary"}
        variant={"contained"}
        startIcon={<ShoppingCartIcon/>}
        onClick={onClick} //this addCartHanle need to be pass from App so it can trigger with header
        disabled={value > max || value < 1 ? true : false}
      >
        Add to Cart
      </Button>
    </Container>
  );
};

function CardPrice(props) {
  return <CardPriceComponent {...props} />;
}

export default CardPrice;
