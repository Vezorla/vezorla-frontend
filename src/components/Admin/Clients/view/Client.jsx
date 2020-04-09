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
import {Email, Person, Phone} from '@material-ui/icons';
import LoadingHOC from '../../../common/HOC/LoadingHOC';
import globalStyles from "../../../../assets/styles/styles";

/**
 * @file Client List View Componenet
 * @author MinhL4m
 * @version 1.0
 */

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
    alignItems: "center"
  },
  icon: {
    marginRight: "0.5rem"
  }
}));

const ClientCard = ({firstName = '-', lastName = '-', email, phoneNum = '-'}) => {
  const stylesGlobal = globalStyles();
  const styles = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Link to={`/admin/clients/${email}`} className={stylesGlobal.link}>
        <Card
          key={email}
          raised
        >
          <CardActionArea>
            <CardContent className={styles.cardContent}>
              <Container disableGutters className={styles.row}>
                <Person color={"secondary"} className={styles.icon}/>
                <Typography variant={"h5"}>
                  {firstName} {lastName}
                </Typography>
              </Container>
              <Container disableGutters className={styles.row}>
                <Email color={"secondary"} className={styles.icon}/>
                <Typography variant={"h6"}>
                  {email}
                </Typography>
              </Container>
              <Container disableGutters className={styles.row}>
                <Phone color={"secondary"} className={styles.icon}/>
                <Typography>
                  {phoneNum}
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
        </Card>
      </Link>
    </Grid>
  )
    ;
};

function ClientComponent({list = []}) {
  const styles = useStyles();
  return (
    <Container maxWidth={false} className={styles.container}>
      <Grid container spacing={2}>
        {list.map((client) => <ClientCard {...client} />)}
      </Grid>
    </Container>
  );
}

const Client = (props) => {
  return LoadingHOC(ClientComponent)({...props, message: 'something went wrong with loading client list'});
};
export default Client;
