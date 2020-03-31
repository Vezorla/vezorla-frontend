import React from "react";
import {Container, makeStyles} from "@material-ui/core";
import BannerContainer from "./Banner/Banner-container";
import coverImage from "../../assets/images/Veronica_and_olive_1296x.jpg"
import BestSellersContainer from "./BestSellers/BestSellers-container";
import SubscriptionMailingContainer from "./SubscriptionMailing/SubscriptionMailing-container";

const useStyles = makeStyles(theme => ({
  coverImg: {
    margin: "0.5rem 0",
    width: "100%",
    height: "auto"
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container disableGutters>
      <BannerContainer/>
      <img
        src={coverImage}
        alt="Veronica with olives"
        className={classes.coverImg}/>
        <BestSellersContainer/>
        <SubscriptionMailingContainer/>
    </Container>
  );
}