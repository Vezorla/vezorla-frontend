import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Container, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  containerStyles: {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
  }
}));

export default function DiscountPage() {
  const styles = useStyles();

  return (
    <Container className={styles.containerStyles}>
      <Typography variant={"h4"} gutterBottom>
        Coming soon
      </Typography>
      <Typography>
        Here you will be able to create and update discounts
      </Typography>
    </Container>
  )
}