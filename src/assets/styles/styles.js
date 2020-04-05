import {makeStyles} from "@material-ui/core/styles";

const globalStyles = makeStyles({
  containerMain: {
    marginTop: "0.3rem",
    marginBottom: "4rem"
  },
  containerButtons: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "1rem 0"
  },
  link: {
    textDecoration: "none"
  },
});

export default globalStyles;