import React from "react";
import {Typography, makeStyles, Container} from "@material-ui/core";
import topImg from "../../../assets/images/Vezorla_olive_B&W_360x480.JPG";
import globalStyles from "../../../assets/styles/styles";

const useStyles = makeStyles(theme => ({
  topImg: {
    width: "100%",
    borderRadius: "5%",
    marginBottom: "1rem",
    float: "left",
    height: "auto",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
      margin: "0 1rem 1rem 0"
    }
  },
  unorderedList: {
    listStyleType: "circle",
    paddingInlineStart: "1.5rem"
  }
}));

export default function About() {
  const classes = useStyles();
  const classesGlobal = globalStyles();

  return (
    <Container
      className={classesGlobal.containerMain}
    >
      <Typography
        align="center"
        variant="h4"
        gutterBottom
      >
        About Us
      </Typography>
      <img
        src={topImg}
        alt="Veronica with olives"
        className={classes.topImg}/>
      <Typography paragraph align={"justify"}>
        I grew up in a traditional Andalusian family, surrounded by olive
        trees and the smell of olive oil in my mom's kitchen. Olive Oil is
        more than a culinary product for me, it is a way of living in my
        family and has been for generations.
      </Typography>
      <Typography paragraph align={"justify"}>
        My hometown, Cazorla, is a small village in the south east of Spain,
        a region which has been home to olive harvesting for more than 800
        years. The region is certified as a Protected Designation of Origin
        due to its unique geographical environment and natural and human
        factors; and is home to the second largest environmentally protected
        area in Europe.
      </Typography>
      <Typography paragraph align={"justify"}>
        Once I was 10 years old, Cazorla became my hometown. It is located
        in the heart of the largest olive-growing area in Spain and the
        world. This region is 1,331 square kilometers and the 30% of it are
        olive trees.
      </Typography>
      <Typography paragraph align={"justify"}>
        I have 11 family members dedicated exclusively to their olive oil
        groves using techniques that are respectful of the environment in
        order to avoid soil erosion and degradation and to preserve
        biodiversity. Some of them have 1 grove, some have 2, and others
        have up to 5 small groves, inherited from my grandparents and great
        grandparents for countless generations.
      </Typography>
      <Typography paragraph align={"justify"}>
        My family owns a total of 10,000 centenary olive trees in the
        mountains of Cazorla which produce around 50,000 kilograms of olives
        every harvest and between 6,000 and 12,000 liters of olive oil per
        year. The output changes each year depending on the weather and when
        the olives are harvested, if they are picked unripe the amount of
        juice extracted from them is less than if they are picked when fully
        ripe.
      </Typography>
      <Typography paragraph align={"justify"}>
        As far back as I remember all of my family members have sold their
        olives to the mills who package and export it. In 2015 was the first
        time that a percentage of my family's production was commercialized
        under the Vezorla brand.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Our Process
      </Typography>
      <Typography variant="h6" gutterBottom>
        My Family's Role
      </Typography>
      <Typography paragraph align={"justify"}>
        <ul className={classes.unorderedList}>
          <li>
            Careful olive tree cultivation (proper pruning, pest treatment, eco-friendly products.
          </li>
          <li>
            Harvesting of olives at their optimal time of maturity and their
            transport to the olive mill as quickly as possible under the best
            conditions.
          </li>
          <li>
            Contributing to the preservation and conservation of the
            environment by managing the by-products of both of the
            cultivation, and the olive mill where pits are burnt for heating
            and olive waste is used for compost.
          </li>
        </ul>
      </Typography>
      <Typography variant="h6" gutterBottom>
        Vezorla's Role
      </Typography>
      <Typography paragraph align={"justify"}>
        <ul className={classes.unorderedList}>
          <li>
            Vezorla assumes the cost of the production destined to Calgary
            customers.
          </li>
          <li>
            Arranges to bring the olives to a private mill to cold press them.
            Vezorla delegates the supervision of the crushing to her uncle
            Andres Guirado, consummate pressing of olives in the olive mill in
            order to obtain the best extra virgin oil under the most suitable
            conditions which permit the oil to conserve all of the aromas and
            flavours of the fresh olives and all of the healthy properties
            (polyphenols, vitamins, etc...).
          </li>
          <li>
            Sends a sample to a certified lab to get tested and certified as
            Extra Virgin.
          </li>
          <li>
            Imports the Extra Virgin Olive Oil exclusively to Calgary.
          </li>
          <li>
            Directs marketing "From the field to your table".
          </li>
        </ul>
      </Typography>
      <Typography paragraph align={"justify"}>
        The traditional and hand-crafted art of olive tree cultivation is currently in serious danger.
        Due to the high costs of cultivation and harvesting and the reduction in the price of olive oil, fundamentally
        caused by the large distribution chains, the traditional olive grove is below its profitability threshold.
        Many farmers when faced with this situation decide to abandon their trees.
        <br/>
        We promote the direct sale, from the producer to the consumer, by cutting out the middleman.
        This is the reason we can maintain the highest quality and still have a fair relationship between quality/price.
      </Typography>
    </Container>
  );
}
