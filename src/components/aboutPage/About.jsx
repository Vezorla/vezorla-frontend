import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Grid
} from "@material-ui/core";
import topImg from "../../assets/images/VezorlaCover.JPG";

const useStyles = makeStyles(theme => ({
  root: {
    height: "97.5vh",
    width: "97.5vw"
  },
  media: {
    height: `10em`,
    backgroundImage: `url(${topImg})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
    width: '100%'
  },
  text: {
    display: "flex"
  },
  card: {
      width: '80vw',
      margin: 'auto',
    [`@media screen and (orientation: portrait)`]: {
        marginTop: '10vh'
    },
    [`@media screen and (orientation: landscape)`]: {
        marginTop: '18vh',
    }
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <Grid xs={12} className={classes.root}>
      <Card className={classes.card}>
        <Grid container xs={12}>
          <Grid item xs={4} sm={6} height={100}>
            <div className={classes.media}>&nbsp;</div>
          </Grid>
          <Grid item xs={8} sm={6} justify='center' height={100}>
            <CardContent>
              <h3>About Us</h3>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
