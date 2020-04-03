import React, {Component} from "react";
import PurchaseOrderAdd from "./PurchaseOrderAdd-view";
import {withRouter} from "react-router";

const GET_PO_NUM_URL = "http://localhost:8080/api/admin/purchase_order/next";
const GET_WAREHOUSES_URL = "http://localhost:8080/api/admin/warehouse/all/po";
const GET_PRODUCTS_URL = "http://localhost:8080/api/admin/inventory/all/po";
const SAVE_PURCHASE_ORDER_URL = "http://localhost:8080/api/admin/receive_purchase_order";

class PurchaseOrderAddContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextPO: "",
      warehouses: [],
      products: [],
      po: {
        received: new Date()
      },
      lots: [
        {
          num: 1,
          qty: "",
          cost: "",
          bestBefore: new Date(),
          prodId: "",
          warehouseNum: ""
        },
      ],
      save: false,
      error: false,
      message: ""
    };
    this.setDateReceived = this.setDateReceived.bind(this);
    this.setStateLots = this.setStateLots.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  componentDidMount() {
    this.getPoNum();
    this.getWarehouseList();
    this.getProductList();
  }

  getPoNum = async () => {
    const response = await fetch(GET_PO_NUM_URL);
    if (response.status === 200) {
      const data = await response.json();
      this.setState({nextPO: data.nextPO});
    }
  };

  getWarehouseList = async () => {
    const response = await fetch(GET_WAREHOUSES_URL);
    if (response.status === 200) {
      const data = await response.json();
      this.setState({warehouses: data.warehouses});
    }
  };

  getProductList = async () => {
    const response = await fetch(GET_PRODUCTS_URL);
    if (response.status === 200) {
      const data = await response.json();
      this.setState({products: data.products});
    }
  };

  setDateReceived(value) {
    this.setState({po: {...this.state.po, received: value}});
  };

  setStateLots(field) {
    return (e) => {
      this.setState({lots: [{...this.state.lots[0], [`${field}`]: e.target.value}]});
    }
  };

  handleSave = async () => {
    // TODO: Save all lots
    if (
      this.state.lots[0].prodId !== "" &&
      this.state.lots[0].warehouseNum !== "" &&
      this.state.lots[0].qty > 0 &&
      this.state.lots[0].cost >= 0
    ) {
      let dateReceived = this.formatDate(this.state.po.received);
      let dateBestBefore = this.formatDate(this.state.lots[0].bestBefore);

      try {
        const response = await fetch(SAVE_PURCHASE_ORDER_URL, {
          method: "POST",
          headers: {
            Content: "application/json"
          },
          credentials: "include",
          body: JSON.stringify(
            {
              po: {
                received: dateReceived
              },
              lots: [
                {
                  qty: this.state.lots[0].qty,
                  cost: this.state.lots[0].cost,
                  bestBefore: dateBestBefore,
                  prodId: this.state.lots[0].prodId,
                  warehouseNum: this.state.lots[0].warehouseNum
                }
              ]
            }
          )
        });
        if (response.status === 200) {
          const data = await response.json();
          if (data === true) {
            // TODO: Show success on adding Purchase Order
          }
        }
      } catch (e) {
        this.setState({error: "Adding Purchase Order failed. Try again please."})
      }
    } else {
      // TODO: Show error message
    }
  };

  handleCancel = () => {
    this.props.history.push("/admin/purchase-orders");
  };

  formatDate(date) {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  render() {
    return (
      <PurchaseOrderAdd
        {...this.state}
        setDateReceived={this.setDateReceived}
        setWarehouse={this.setStateLots("warehouseNum")}
        setProduct={this.setStateLots("prodId")}
        setProductQuantity={this.setStateLots("qty")}
        setProductCost={this.setStateLots("cost")}
        setProductBestBeforeDate={this.setStateLots("bestBefore")}
        handleSave={this.handleSave}
        handleCancel={this.handleCancel}
      />
    );
  }
}

export default withRouter(PurchaseOrderAddContainer);