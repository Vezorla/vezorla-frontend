import React from "react";
import { Typography, makeStyles, Grid } from "@material-ui/core";
import topImg from "../../assets/images/VezorlaCover.JPG";

const useStyles = makeStyles(theme => ({
  root: {
    width: "80vw",
    marginLeft: "auto",
    marginRight: "auto",
    overflow: "scroll",
    [`@media screen and (orientation: portrait)`]: {
      marginTop: "10vh",
      marginBottom: "10vh"
    },
    [`@media screen and (orientation: landscape)`]: {
      marginTop: "18vh",
      marginBottom: "18vh"
    }
  },
  media: {
    height: `100%`,
    backgroundImage: `url(${topImg})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
    width: "100%",
    borderRadius: `10%`
  },
  textHeader: {
    letterSpacing: "0.1em"
  },
  textSub: {
    padding: 0,
    margin: 0
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Typography
            align="center"
            justify="center"
            paragraph={true}
            variant="h2"
          >
            About Us
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ height: "3em" }}></Grid>

        <Grid item xs={12}>
          <Grid item xs={12} sm={12} justify="center"></Grid>
          <Grid
            item
            xs={5}
            sm={2}
            style={{ height: "7.5em", paddingRight: "" }}
          >
            <div className={classes.media}>&nbsp;</div>
          </Grid>
        </Grid>

        <Grid item xs={12} s={12} style={{ overflow: "scroll" }}>
          <Typography paragraph={true}>
            I grew up in a traditional Andalusian family, surrounded by olive
            trees and the smell of olive oil in my mom's kitchen. Olive Oil is
            more than a culinary product for me, it is a way of living in my
            family and has been for generations.
          </Typography>
          <Typography paragraph={true}>
            My hometown, Cazorla, is a small village in the south east of Spain,
            a region which has been home to olive harvesting for more than 800
            years. The region is certified as a Protected Designation of Origin
            due to its unique geographical environment and natural and human
            factors; and is home to the second largest environmentally protected
            area in Europe.
          </Typography>
          <Typography paragraph={true}>
            Once I was 10 years old, Cazorla became my hometown. It is located
            in the heart of the largest olive-growing area in Spain and the
            world. This region is 1,331 square kilometers and the 30% of it are
            olive trees.
          </Typography>
          <Typography paragraph={true}>
            I have 11 family members dedicated exclusively to their olive oil
            groves using techniques that are respectful of the environment in
            order to avoid soil erosion and degradation and to preserve
            biodiversity. Some of them have 1 grove, some have 2, and others
            have up to 5 small groves, inherited from my grandparents and great
            grandparents for countless generations.
          </Typography>
          <Typography paragraph={true}>
            My family owns a total of 10,000 centenary olive trees in the
            mountains of Cazorla which produce around 50,000 kilograms of olives
            every harvest and between 6,000 and 12,000 liters of olive oil per
            year. The output changes each year depending on the weather and when
            the olives are harvested, if they are picked unripe the amount of
            juice extracted from them is less than if they are picked when fully
            ripe.
          </Typography>
          <Typography paragraph={true}>
            As far back as I remember all of my family members have sold their
            olives to the mills who package and export it. In 2015 was the first
            time that a percentage of my family's production was commercialized
            under the Vezorla brand.
          </Typography>
        </Grid>

        <Grid
          xs={12}
          s={12}
          style={{ marginTop: "5em" }}
          align="center"
          justify="center"
        >
          <Typography paragraph={true} variant="h4">
            Our Process
          </Typography>
        </Grid>
        <Grid xs={12} s={12} style={{ height: "4em" }}></Grid>
        <Grid xs={12} s={12} style={{}}>
          <Typography paragraph={true} variant="h5">
            My Family's Role
          </Typography>
          <Typography paragraph={true}>
            Careful olive tree cultivation<br></br>
            &rarr; Proper Pruning<br></br>
            &rarr; Pest Treatment<br></br>
            &rarr; All Products are Eco - Friendly<br></br>
            <br></br>
            <Typography paragraph={true}>
              Harvesting of olives at their optimal time of maturity and their
              transport to the olive mill as quickly as possible under the best
              conditions.
            </Typography>
            <Typography paragraph={true}>
              Contributing to the preservation and conservation of the
              environment by managing the by-products of both of the
              cultivation, and the olive mill where pits are burnt for heating
              and olive waste is used for compost.
            </Typography>
          </Typography>
        </Grid>
        <Grid xs={12} s={12} style={{ marginTop: "5em" }}>
          <Typography paragraph={true} variant="h5">
            My Role
          </Typography>
          <Typography paragraph={true}>
            Vezorla assumes the cost of the production destined to Calgary
            customers. Arranges to bring the olives to a private mill to cold press them.
            <br></br><br></br>
            Vezorla delegates the supervision of the crushing to her uncle
            Andres Guirado, consummate pressing of olives in the olive mill in
            order to obtain the best extra virgin oil under the most suitable
            conditions which permit the oil to conserve all of the aromas and
            flavours of the fresh olives and all of the healthy properties
            (polyphenols, vitamins, etc...)
            <br></br><br></br>  <br></br>
            Sends a sample to a certified lab to get tested and certified as
            Extra Virgin.<br></br><br></br>
            Imports the Extra Virgin Olive Oil exclusively to Calgary.<br></br><br></br>
            Directs marketing "From the field to your table".<br></br><br></br>
          </Typography>
        </Grid>
        <Grid xs={12} s={12} style={{ height: "4em" }}></Grid>
      </Grid>
    </div>
  );
}
