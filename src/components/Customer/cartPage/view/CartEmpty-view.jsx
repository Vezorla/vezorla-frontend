import React from "react";
import {Link} from "react-router-dom";
import {Button, Container, makeStyles, Typography} from "@material-ui/core";
import StoreIcon from "@material-ui/icons/Storefront";
import globalStyles from "../../../../assets/styles/styles";

const useStyles = makeStyles(theme => ({
  centered: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh"
  }
}));

export default function CartEmpty() {
  const classes = useStyles();
  const classesGlobal = globalStyles();

  return (
    <Container
      disableGutters
      className={`${classesGlobal.containerMain} ${classes.centered}`}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
      >
        Your cart is empty
      </Typography>
      <Button
        variant={"contained"}
        color={"primary"}
        startIcon={<StoreIcon/>}
        component={Link}
        to={"/customer/shop"}
      >
        Go shopping
      </Button>
    </Container>
  )
}