import React from 'react';
import {Link} from 'react-router-dom';
import {
  Button,
  Card, CardActionArea, CardContent,
  Container,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import {AttachMoney, Email, Event} from '@material-ui/icons';
import globalStyles from "../../../../assets/styles/styles";

/**
 * @author MinhL4m
 * @version 1.0
 */

const URL = '/admin/sales';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "1rem",
    marginBottom: "4rem"
  },
  cardContent: {
    textAlign: "center"
  },
  row: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "0.5rem 0"
  },
  icon: {
    marginRight: "0.5rem"
  }
}));

export default function Sales({list = []}) {
  const styles = useStyles();
  const stylesGlobal = globalStyles();

  return (
    <Container maxWidth={false} className={styles.container}>
      <Typography variant="h4" gutterBottom align={"center"}>
        Sales
      </Typography>
      <Grid container spacing={2}>
        {list.map((invoice) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Link to={`${URL}/${invoice.invoiceNum}`} className={stylesGlobal.link}>
              <Card
                key={invoice.invoiceNum}
                raised
              >
                <CardActionArea>
                  <CardContent className={styles.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Invoice #{invoice.invoiceNum}
                    </Typography>
                    <Container disableGutters className={styles.row}>
                      <Email color={"secondary"} className={styles.icon}/>
                      <Typography>
                        {invoice.email}
                      </Typography>
                    </Container>
                    <Container disableGutters className={styles.row}>
                      <Event color={"secondary"} className={styles.icon}/>
                      <Typography>
                        {invoice.date}
                      </Typography>
                    </Container>
                    <Container disableGutters className={styles.row}>
                      <AttachMoney color={"secondary"} className={styles.icon}/>
                      <Typography variant="h6">
                        {invoice.total}
                      </Typography>
                    </Container>
                  </CardContent>
                </CardActionArea>
                <Button
                  color={"primary"}
                  variant="contained"
                  size="large"
                  fullWidth
                >
                  View
                </Button>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
