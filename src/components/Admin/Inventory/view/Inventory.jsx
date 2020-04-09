import React from 'react';
import {Link} from 'react-router-dom';
import {
  Button,
  Card,
  CardActionArea, CardContent,
  CardMedia,
  Container,
  Fab,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import {Add} from "@material-ui/icons";
import LoadingHOC from '../../../common/HOC/LoadingHOC';
import globalStyles from "../../../../assets/styles/styles";

/**
 * @file Inventory View Componenet
 * @author MinhL4m
 * @version 1.0
 */

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

const CardComponent = ({prodId, name, qty, price, img}) => {
  const stylesGlobal = globalStyles();
  const styles = useStyles();
  const URL = '/admin/inventory';

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Link to={`${URL}/${prodId}`} className={stylesGlobal.link}>
        <Card
          key={prodId}
          raised
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt={name}
              image={`data:image/jpeg;base64,${img}`}
              title="props.name"
            />
            <CardContent className={styles.content}>
              <Typography variant="h6">
                {name}
              </Typography>
              <Typography>
                <b>{qty} in stock</b>
              </Typography>
              <Typography>
                ${price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Button
            color={"primary"}
            size="large"
            variant="contained"
            fullWidth
          >
            View
          </Button>
        </Card>
      </Link>
    </Grid>
  );
};

const InventoryComponent = ({list = [], imgs = []}) => {
  const stylesGlobal = globalStyles();
  const styles = useStyles();

  return (
    <Container maxWidth={false} className={stylesGlobal.containerMain}>
      <Typography
        variant="h4"
        align={"center"}
        gutterBottom
      >
        Inventory
      </Typography>
      <Grid container spacing={2}>
        {list.map((item, index) => <CardComponent {...item} img={imgs[index]}/>)}
      </Grid>
      <Fab
        color={"primary"}
        aria-label={"add"}
        variant={"extended"}
        className={styles.fab}
        component={Link}
        to="/admin/inventory/create"
      >
        <Add/>
        Add
      </Fab>
    </Container>
  );
};

const Inventory = (props) => {
  return LoadingHOC(InventoryComponent)(props);
};

export default Inventory;
