import React from "react";
import {Link} from "react-router-dom";
import {Button, Container, Divider, makeStyles, Typography} from "@material-ui/core";
import StoreIcon from "@material-ui/icons/Storefront";
import BannerContainer from "./Banner/Banner-container";
import coverImage from "../../assets/images/Veronica_and_olive_1296x.jpg"
import SubscriptionMailingContainer from "./SubscriptionMailing/SubscriptionMailing-container";
import globalStyles from "../../assets/styles/styles";

const useStyles = makeStyles(theme => ({
  coverImg: {
    margin: "0.5rem 0",
    width: "100%",
    height: "auto"
  },
  textUppercase: {
    textTransform: "uppercase"
  },
  video: {
    width: "100%",
    height: "auto",
    border: "none",
    marginBottom: "1rem"
  }
}));

export default function Home() {
  const classes = useStyles();
  const classesGlobal = globalStyles();

  return (
    <Container
      disableGutters
      className={classesGlobal.containerMain}
    >
      <BannerContainer/>
      <img
        src={coverImage}
        alt="Veronica with olives"
        className={classes.coverImg}/>
      <Container>
        <Typography
          align={"center"}
          variant={"h5"}
          gutterBottom
        >
          Trusted olive oil from grove to table
        </Typography>
        <Typography
          align={"justify"}
          variant={"body1"}
          paragraph
        >
          I grew up in a traditional Andalusian family with a long tradition of growing and harvesting centenary olive
          trees. We, my family, sell it directly to maintain the highest quality with a fair relationship between
          quality/price.
        </Typography>
        <Typography
          align={"justify"}
          variant={"body1"}
          paragraph
        >
          We finished this year's harvest on Feb 2020 and the olive oil is ready to be enjoyed.&nbsp;
          <b>Available in Canada on April 2020.</b>
        </Typography>
        <Typography
          align={"center"}
          variant={"h6"}
          gutterBottom
          className={classes.textUppercase}
        >
          cold extracted, pure and always fresh
        </Typography>
        <Container
          className={classesGlobal.containerButtons}
        >
          <Button
            variant={"contained"}
            color={"primary"}
            startIcon={<StoreIcon/>}
            component={Link}
            to="/customer/shop"
            // onClick={handleShopping}
          >
            Shop
          </Button>
        </Container>
      </Container>
      <Container>
        <iframe
          title="Vezorla's Grove video"
          src="https://www.youtube.com/embed/Yn0kalIKcw8"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={classes.video}
        />
      </Container>
      <Container>
        <Typography
          align={"center"}
          variant={"h5"}
          gutterBottom
        >
          Would you buy old produce?
        </Typography>
        <Typography
          align={"justify"}
          variant={"body1"}
          paragraph
        >
          So why would you buy outdated olive oil? Just like your fruits and veggies, EVOO is best when fresh.
          I recommend to look for the Harvest Date in the bottle.
        </Typography>
        <Typography
          align={"justify"}
          variant={"body1"}
          paragraph
        >
          After harvest and milling, the bitter and peppery flavours are at their greatest dimension.
          Seasonal, regional, and varietal characters shine through.
          Health-giving properties such as antioxidants, polyphenols, and oleic acids are also at their peak.
        </Typography>
        <Typography
          align={"justify"}
          variant={"body1"}
          paragraph
        >
          Vezorla is committed to freshness in every aspect of what we do.
          We declare the harvest date on the back label.
          Freshness is an important measure of quality.
          Why would you accept any less?
        </Typography>
        <Typography
          align={"center"}
          variant={"body1"}
          paragraph
        >
          Use it generously - and soon!
        </Typography>
        <Divider/>
      </Container>
      <SubscriptionMailingContainer/>
    </Container>
  );
}