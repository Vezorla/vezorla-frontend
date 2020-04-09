import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {Container, Typography} from "@material-ui/core";
import LoadingHOC from '../../../common/HOC/LoadingHOC';
import WeekSale from '../view/WeekSale';
import OtherInfo from '../view/OtherInfo';

/**
 * @file Dashboard Componenet
 * @author MinhL4m
 * @version 1.0
 */

const URL = 'url';

const Dashboard = ({props}) => {
  const containerStyles = {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
  };

  return (
    <Container style={containerStyles}>
      <Typography variant={"h4"} gutterBottom>
        Coming soon
      </Typography>
      <Typography>
        Here you will see an overview of all available data and statistics
      </Typography>
      {/*<WeekSale {...props} />
      <OtherInfo {...props} />*/}
    </Container>
  );
};

class DashboardContainer extends Component {
  constructor() {
    super();
    this.state = {
      orderNum: '',
      orderVal: '',
      productSold: '',
      percentCompare: '',
      newClient: '',
      highSell: '',
      lowSell: '',
      lowStock: '',
      pendingOrder: '',
      stage: ''
    };
  }

  fetchInfo = async () => {
    this.setState({stage: 'loading'});
    try {
      const response = await fetch(URL);
      if (response === 200) {
        const data = await response.json();
        if (data !== null) {
          this.setState({info: {...data}});
          this.setState({stage: 'done'});
        } else {
          this.setState({stage: 'error'});
        }
      }
    } catch (err) {
      this.setState({stage: 'error'});
    }
  };

  render() {
    return LoadingHOC(Dashboard)(this.state);
  }
}

export default withRouter(DashboardContainer);