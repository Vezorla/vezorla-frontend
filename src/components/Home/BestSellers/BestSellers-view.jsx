import React from "react";
import {Grid, makeStyles, Typography} from "@material-ui/core";
import CardItem from "../../Customer/shopPage/view/CardItem";
import loadingHOC from "../../common/HOC/LoadingHOC";

const useStyles = makeStyles(theme => ({
  title: {
    backgroundColor: theme.palette.primary.main,
    width: "100%"
  }
}));

const BestSellersList = ({list}) => {
  const cardList = list.map((product) => {
    return <CardItem key={product.prodId} product={product}/>
  });

  return (
    <Grid
      container
      spacing={3}
      xs={12}
    >
      {cardList}
    </Grid>
  )
};

export default function BestSellers(props) {
  const classes = useStyles();

  return (
    <Typography
      align={"center"}
      color={"secondary"}
      variant={"h6"}
      className={classes.title}
    >
      Best Sellers
    </Typography>
    // TODO: Show list of Best Sellers products
    // loadingHOC(BestSellersList)({...props, message: 'Failed to load the list of products'});
  );
}