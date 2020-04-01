import React from "react";
import {
  Button,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@material-ui/core";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "0.5rem"
  },
  input: {
    width: "100%"
  }
}));

export default function PurchaseOrderAdd({po, lots, setDateReceived, setWarehouse, setProduct, setProductQuantity, setProductCost, setProductBestBeforeDate, handleSave, handleCancel}) {
  const classes = useStyles();

  return (
    <Container
      disableGutters
      className={classes.container}
    >
      <Typography
        align={"center"}
        color={"secondary"}
        variant={"h4"}
      >
        Add Purchase Order
      </Typography>
      <Container>
        <Typography
          variant={"h6"}
        >
          PO number: XXXX
        </Typography>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-po-received"
            label="Date received"
            format="MMM/dd/yyyy"
            value={po.received}
            onChange={setDateReceived}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            className={classes.input}
          />
        </MuiPickersUtilsProvider>
        <FormControl required>
          <InputLabel id="label-warehouse">Warehouse</InputLabel>
          <Select
            labelId="label-warehouse"
            id="select-warehouse"
            value={lots[0].warehouseNum}
            onChange={setWarehouse}
            className={classes.input}
          >
            <MenuItem value="">
              <em>Select one</em>
            </MenuItem>
            <MenuItem value={1}>Warehouse 1</MenuItem>
            <MenuItem value={2}>Warehouse 2</MenuItem>
          </Select>
        </FormControl>
        <FormControl required>
          <InputLabel id="label-product">Product</InputLabel>
          <Select
            labelId="label-product"
            id="select-product"
            value={lots[0].prodId}
            onChange={setProduct}
            className={classes.input}
          >
            <MenuItem value="">
              <em>Select one</em>
            </MenuItem>
            <MenuItem value={1}>Product ID 1</MenuItem>
            <MenuItem value={2}>Product ID 2</MenuItem>
          </Select>
        </FormControl>
        <FormControl required>
          <TextField
            id="quantity-textfield"
            label="Quantity"
            type="number"
            value={lots[0].qty}
            placeholder="0"
            inputProps={{
              min: 1
            }}
            onChange={setProductQuantity}
            className={classes.input}
          />
        </FormControl>
        <FormControl required>
          <TextField
            id="cost-textfield"
            label="Cost"
            type="number"
            value={lots[0].cost}
            placeholder="0.00"
            InputProps={{
              min: 0,
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            onChange={setProductCost}
            className={classes.input}
          />
        </FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-product-best-before-date"
            label="Best before date product"
            format="MMM/dd/yyyy"
            value={lots[0].bestBefore}
            onChange={setProductBestBeforeDate}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            className={classes.input}
          />
        </MuiPickersUtilsProvider>
      </Container>
      <Container
        disableGutters
        className={classes.container}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </Container>
    </Container>
  );
}