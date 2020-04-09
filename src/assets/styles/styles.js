import {makeStyles} from "@material-ui/core/styles";
import theme from "./theme";

const globalStyles = makeStyles({
  containerMain: {
    [theme.breakpoints.up("xs")]: {
      marginTop: "0.3rem",
      marginBottom: "4rem"
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "0",
      marginBottom: "5rem"
    }
  },
  containerButtons: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "1rem 0"
  },
  link: {
    textDecoration: "none"
  }
});

export default globalStyles;