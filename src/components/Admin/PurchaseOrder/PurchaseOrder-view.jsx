import React from "react";
import {Container, Fab, makeStyles, Typography} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import {Link} from "react-router-dom";
import globalStyles from "../../../assets/styles/styles";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
  }
}));

export default function PurchaseOrder() {
  const classes = useStyles();
  const classesGlobal = globalStyles();

  return (
    <Container
      disableGutters
      className={classesGlobal.containerMain}>
      <Typography
        align={"center"}
        color={"secondary"}
        variant={"h4"}
      >
        Purchase Orders
      </Typography>
      <Fab
        color={"primary"}
        aria-label={"add"}
        variant={"extended"}
        className={classes.fab}
        component={Link}
        to="/admin/purchase-orders/add"
      >
        <Add/>
        Add
      </Fab>
    </Container>
  );
}