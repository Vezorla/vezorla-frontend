import React from 'react';
import {Link} from 'react-router-dom';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import globalStyles from "../../../../assets/styles/styles";

/**
 * @file CardItem View Component
 * @author MinhL4m
 * @version 1.0
 */

const useStyles = makeStyles((theme) => ({
  content: {
    textAlign: "center"
  }
}));

/**
 * creat CardItem view pass on props passed in
 * @param {Object} props - props of this functional component
 * @returns CardItem View
 */
function CardItem({product, img = ''}) {
  const styles = useStyles();
  const stylesGlobal = globalStyles();
  const {prodId, name, harvestTime, price} = product;
  const url = '/customer/product/' + prodId;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Link to={url} className={stylesGlobal.link}>
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
                Harvested on {harvestTime}
              </Typography>
              <Typography>
                <b>${price}</b>
              </Typography>
            </CardContent>
          </CardActionArea>
          <Button
            color={"primary"}
            variant="contained"
            fullWidth
            size={"large"}
          >
            View
          </Button>
        </Card>
      </Link>
    </Grid>
  );
}

export default CardItem;
