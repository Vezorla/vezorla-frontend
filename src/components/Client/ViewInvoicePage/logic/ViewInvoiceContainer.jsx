import React, {Component} from 'react';
import LoadingHOC from '../../../common/HOC/LoadingHOC';
import ViewInvoice from '../view/ViewInvoice';

/**
 * @file ViewInvoice Logic component
 * @author MinhL4m
 * @version 1.0
 */

const URL = 'http://localhost:8080/api/client/invoice';

export default class ViewInvoiceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoiceNum: '',
      date: '',
      list: [],
      subtotal: '',
      discount: '',
      taxes: '',
      total: '',
      stage: '',
      message: ''
    };
  }

  fetchData = async () => {
    this.setState({stage: 'loading'});
    try {
      const response = await fetch(`${URL}/${this.props.invoiceNum}`);
      if (response.status === 200) {
        const data = await response.json();
        this.setState({
          invoiceNum: data.invoiceNum,
          date: data.date,
          list: [...data.lineItems],
          discount: data.discount,
          subtotal: data.subtotal,
          taxes: data.taxes,
          total: data.total,
          stage: 'done'
        });
        // need to catch 418 to redirect
      } else if (response.status >= 400) {
        this.setState({stage: 'error', message: 'Error has occured! Please try again later.'});
      }
    } catch (err) {
      this.setState({stage: 'error', message: 'Error has occured! Please try again later.'});
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return LoadingHOC(ViewInvoice)(this.state);
  }
}
