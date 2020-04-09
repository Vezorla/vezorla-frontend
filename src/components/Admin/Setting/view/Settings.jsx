import React from 'react';
import {FilePond, registerPlugin} from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import {
  Button,
  Container,
  FormControl,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core';
import {CloudDownload} from '@material-ui/icons';
import globalStyles from "../../../../assets/styles/styles";

/**
 * @file Settings View Componenet
 * @author MinhL4m
 * @version 1.0
 */

const useStyles = makeStyles(theme => ({
  button: {
    margin: "1rem 0"
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0.5rem 0"
  },
}));

export default function Settings({info, setPassword, onUpdate, onBackUp, onUpload, setFile}) {
  const stylesGlobal = globalStyles();
  const styles = useStyles();

  return (
    <Container disableGutters className={stylesGlobal.containerMain}>
      <Container disableGutters style={{"marginBottom": "4rem"}}>
        <Typography variant="h4" align={"center"} gutterBottom>
          Settings
        </Typography>
        <FormControl fullWidth margin={"normal"}>
          <TextField
            label="Email"
            value={info.email}
            disabled/>
        </FormControl>
        <FormControl fullWidth margin={"normal"}>
          <TextField
            label="Password"
            value={info.password}
            onChange={setPassword}
            type="password"/>
        </FormControl>
        <Button
          color={"primary"}
          variant="contained"
          onClick={onUpdate}
          className={styles.button}
          fullWidth
        >
          Update
        </Button>
      </Container>
      <Container disableGutters>
        <Container disableGutters className={styles.row}>
          <Typography variant="h5" gutterBottom>
            Backup
          </Typography>
          <Button
            onClick={onBackUp}
            variant="contained"
            color={"primary"}
			startIcon={<CloudDownload/>}
          >
            Download Backup
          </Button>
        </Container>
        <Container disableGutters>
          <FilePond
            files={info.file}
            maxFiles={1}
            onupdatefiles={setFile}
            style={{padding: '3rem 0'}}/>
          <Button
            color={"primary"}
            variant="contained"
            fullWidth
            onClick={onUpload}
          >
            Update
          </Button>
        </Container>
      </Container>
    </Container>
  );
}
