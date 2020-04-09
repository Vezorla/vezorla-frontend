import React from 'react';
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  FormControlLabel,
  makeStyles,
  Switch,
  TextField,
  Typography
} from '@material-ui/core';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Stepper from '../../../common/Stepper/Stepper';
import globalStyles from "../../../../assets/styles/styles";

/**
 * @file  View Product Componenet
 * @author MinhL4m
 * @version 1.0
 */

const useStyles = makeStyles(theme => ({
  center: {
    textAlign: "center"
  },
  button: {
    margin: "1rem 0"
  },
  formControl: {
    [theme.breakpoints.up("xs")]: {
      width: "100%"
    },
    [theme.breakpoints.up('sm')]: {
      width: "45%",
      marginRight: "1rem"
    }
  },
}));

export default function Product(
  {
    info,
    imgs,
    imageName,
    addImg,
    setName,
    setPrice,
    setThreshold,
    setHarvestTime,
    setDescription,
    setSubDescription,
    setActive,
    onSave,
    onCancel,
    create
  }) {
  const styles = useStyles();
  const stylesGlobal = globalStyles();

  const onClick = (e) => {
    e.preventDefault();
    const input = document.querySelector('.addImg');
    input.click();
  };
  return (
    <Container
      disableGutters
      maxWidth={"sm"}
      className={stylesGlobal.containerMain}
    >
      {create ? (
        <Typography variant="h4" align={"center"} gutterBottom>
          New Product
        </Typography>
      ) : (
        <Typography variant="h4" align={"center"}>
          Update Product
        </Typography>
      )}
      <Container disableGutters>
        {create ? (
          <Typography align={"center"}>
            You can add more images updating the product after creation
          </Typography>
        ) : (
          <Stepper imgs={imgs} default={true}/>
        )}
        <Button
          variant="contained"
          color={"primary"}
          fullWidth
          onClick={onClick}
          size="large"
          className={styles.button}
        >
          Add Image
        </Button>
        <Typography variant="caption">
          {imageName !== undefined && imageName !== '' ? <b>{imageName}</b> : ''}
        </Typography>
        <input className="addImg" type="file" onChange={addImg} style={{visibility: 'hidden'}}/>
      </Container>
      <Container disableGutters>
        <FormControl
          margin={"normal"}
          fullWidth
        >
          <TextField
            label="Name"
            value={info.name}
            onChange={setName}
            required
          />
        </FormControl>
        <FormControl
          margin={"normal"}
          className={styles.formControl}
        >
          <InputLabel htmlFor="standard-adornment-amount-2">Price</InputLabel>
          <Input
            id="standard-adornment-amount-2"
            value={info.price}
            onChange={setPrice}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            type="number"
            required
            inputProps={{
              min: 1
            }}
          />
        </FormControl>
        <FormControl
          margin={"normal"}
          className={styles.formControl}
        >
          <TextField
            id="standard-basic"
            label="Threshold"
            type="number"
            value={info.threshold}
            required
            inputProps={{
              min: 0
            }}
            InputLabelProps={{
              shrink: true
            }}
            onChange={setThreshold}
          />
        </FormControl>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            fullWidth
            margin="normal"
            id="date-picker-dialog"
            label="Harvest Time"
            format="MMM/dd/yyyy"
            value={info.harvestTime}
            onChange={setHarvestTime}
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
          />
        </MuiPickersUtilsProvider>
      </Container>
      <FormControl
        fullWidth
        margin={"normal"}
      >
        <TextField
          label="Main Description"
          placeholder={"Type the product's main description here."}
          multiline
          rows="5"
          fullWidth
          value={info.description}
          onChange={setDescription}
        />
      </FormControl>
      <FormControl
        fullWidth
        margin={"normal"}
      >
        <TextField
          label="Secondary Description"
          placeholder={"Type the product's secondary description here."}
          multiline
          rows="5"
          fullWidth
          value={info.subdescription}
          onChange={setSubDescription}
        />
      </FormControl>
      <Container disableGutters className={styles.center}>
        <FormControlLabel
          checked={info.active}
          control={<Switch color="primary"/>}
          label="Set Product Active"
          labelPlacement="start"
          onChange={setActive}
        />
      </Container>
      <Container disableGutters className={stylesGlobal.containerButtons}>
        <Button variant="contained" color="primary" onClick={onSave}>
          Save
        </Button>
        <Button variant="contained" color="primary" onClick={onCancel}>
          Cancel
        </Button>
      </Container>
    </Container>
  );
}
