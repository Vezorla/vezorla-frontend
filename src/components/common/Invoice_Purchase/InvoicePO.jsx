import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardActionArea, CardContent, Container, Grid, makeStyles, Typography} from '@material-ui/core';
import globalStyles from "../../../assets/styles/styles";

/**
 * @file Invoice/ Purchase Order Component
 * @author MinhL4m
 * @version 1.0
 */

const Vendor = ({vendor}) => {
  return (
    <div>
      <h2>Vendor</h2>
      <p>{vendor}</p>
    </div>
  );
};

const Email = ({email}) => {
  return (
    <div>
      <h2>Email</h2>
      <p>{email}</p>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  cardContent: {
    textAlign: "center"
  },
  row: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  }
}));

export default function InvoicePO({title, invoiceNum, vendor = '', email = '', total, date, url}) {
  const stylesGlobal = globalStyles();
  const styles = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Link to={url} className={stylesGlobal.link}>
        <Card
          key={invoiceNum}
          raised
        >
          <CardActionArea>
            <CardContent className={styles.cardContent}>
              <Typography variant={"h5"} gutterBottom>
                {title}{invoiceNum}
              </Typography>
              <Container disableGutters className={styles.row}>
                <Typography variant={"h6"}>
                  Date Placed
                </Typography>
                <Typography>
                  {date}
                </Typography>
              </Container>
              <Container disableGutters className={styles.row}>
                <Typography variant={"h6"}>
                  Total
                </Typography>
                <Typography>
                  ${total}
                </Typography>
              </Container>
            </CardContent>
          </CardActionArea>
          <Button
            color={"primary"}
            variant="contained"
            fullWidth
            size="large"
          >
            View
          </Button>
          {/*{vendor !== '' ? <Vendor vendor={vendor}/> : ''}
          {email !== '' ? <Email email={email}/> : ''}*/}
        </Card>
      </Link>
    </Grid>
  );
}
