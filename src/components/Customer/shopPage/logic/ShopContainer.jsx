import React, {Component} from 'react';

import Shop from '../view/Shop';

/**
 * @file Shop Logic Component
 * @author MinhL4m
 * @version 1.0
 */

const URL = 'http://localhost:8080/api/customer/inventory/products/all';
const IMG_URL = 'http://localhost:8080/api/admin/img/get';

/**
 * Shop Logic class component
 */
class ShopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      stage: '',
      imgs: []
    };
  }

  /**
   * Handler for adding product to cart
   */
  fetchData = async () => {
    this.setState({stage: 'loading'});
    try {
      const response = await fetch(URL);

      if (response.status === 200) {
        const data = await response.json();
        if (data !== null) {
          let tempImgs = [];
          for (let temp of data) {
            tempImgs.push(temp.imageMain);
          }

          this.setState({list: data});

          for (let index in tempImgs) {
            const response = await fetch(`${IMG_URL}/${tempImgs[index]}`, {
              method: 'GET',
              credentials: 'include',
              mode: 'cors'
            });
            const data = await response.json();
            tempImgs[index] = data.picByte;
          }

          this.setState({imgs: [...tempImgs], stage: 'done'});
        }
      } else if (response.status >= 400) {
        this.setState({stage: 'error'});
      }
    } catch (err) {
      this.setState({stage: 'error'});
    }
  };

  // ------fetch on load-------
  componentDidMount() {
    this.fetchData();
  }

  /**
   * @returns Shop component that Shop Logic wrap around Shop View
   */
  render() {
    return (
      <Shop list={this.state.list} stage={this.state.stage} imgs={this.state.imgs}/>
    );
  }
}

export default ShopContainer;
