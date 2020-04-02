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
  containerMain: {
    marginTop: "0.5rem"
  },
  containerLot: {
    marginTop: "0.5rem"
  },
  lotNum: {
    marginLeft: "1rem"
  },
  containerForm: {
    borderColor: theme.palette.secondary.main,
    borderStyle: "solid",
    borderWidth: "0.1rem",
    borderRadius: "1rem",
    paddingBottom: "1rem"
  },
  containerButtons: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "1rem 0"
  }
}));

export default function PurchaseOrderAdd(
  {
    po,
    lots,
    setDateReceived,
    setWarehouse,
    setProduct,
    setProductQuantity,
    setProductCost,
    setProductBestBeforeDate,
    handleSave,
    handleCancel
  }) {

  const classes = useStyles();

  return (
    <Container
      className={classes.containerMain}
    >
      <Typography
        align="center"
        variant={"h6"}
      >
        PO number: XXXX
      </Typography>
      <Container
        className={classes.containerLot}
      >
        <Typography
          align="left"
          variant="body1"
          className={classes.lotNum}
        >
          Lot 1
        </Typography>
        <Container
          className={classes.containerForm}
        >
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              margin="normal"
              id="date-picker-po-received"
              label="Date received"
              format="MMM/dd/yyyy"
              value={po.received}
              onChange={setDateReceived}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <FormControl
            fullWidth
            margin="normal"
          >
            <InputLabel id="label-warehouse">Warehouse</InputLabel>
            <Select
              labelId="label-warehouse"
              id="select-warehouse"
              value={lots[0].warehouseNum}
              onChange={setWarehouse}
            >
              <MenuItem value="">
                <em>Select one</em>
              </MenuItem>
              <MenuItem value={1}>Warehouse 1</MenuItem>
              <MenuItem value={2}>Warehouse 2</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            margin="normal"
          >
            <InputLabel id="label-product">Product</InputLabel>
            <Select
              labelId="label-product"
              id="select-product"
              value={lots[0].prodId}
              onChange={setProduct}
            >
              <MenuItem value="">
                <em>Select one</em>
              </MenuItem>
              <MenuItem value={1}>Product ID 1</MenuItem>
              <MenuItem value={2}>Product ID 2</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            margin="normal"
          >
            <TextField
              id="quantity-textfield"
              label="Quantity"
              type="number"
              value={lots[0].qty}
              placeholder="0"
              InputProps={{
                min: 1
              }}
              onChange={setProductQuantity}
            />
          </FormControl>
          <FormControl
            fullWidth
            margin="normal"
          >
            <TextField
              id="cost-textfield"
              label="Cost"
              type="number"
              value={lots[0].cost}
              placeholder="0.00"
              InputProps={{
                min: 0.00,
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              onChange={setProductCost}
            />
          </FormControl>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              margin="normal"
              id="date-picker-product-best-before-date"
              label="Date best before"
              format="MMM/dd/yyyy"
              value={lots[0].bestBefore}
              onChange={setProductBestBeforeDate}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Container>
      </Container>
      <Container
        disableGutters
        className={classes.containerButtons}
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