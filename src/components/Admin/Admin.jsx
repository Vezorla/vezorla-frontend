import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import DashboardContainer from "./Dashboard/logic/DashboardContainer";
import ClientPage from './Clients/logic/ClientPage';
import ClientInfoContainer from './ClientInfo/logic/ClientInfoContainer';
import SettingContainer from './Setting/logic/SettingContainer';
import CreateProductContainer from './Product/logic/CreateProductContainer';
import UpdateProductContainer from './Product/logic/UpdateProductContainer';
import SalesContainer from './Sales/logic/SalesContainer';
import InventoryContainer from './Inventory/logic/InventoryContainer';

import PurchaseOrderContainer from './PurchaseOrder/PurchaseOrder-container';
import SaleInfoContainer from './SaleInfo/logic/SaleInfoContainer';
import PurchaseOrderAddContainer from "./PurchaseOrder/PurchaseOrderAdd/PurchaseOrderAdd-container";
import DiscountPageContainer from "./Discount/DiscountPage-container";

/**
 * @author MinhL4m
 * @version 1.0
 */

export default function Admin() {
  return (
    <Switch>
      <Route path="/admin/dashboard" exact strict component={DashboardContainer}/>
      <Route path="/admin/settings" exact strict component={SettingContainer}/>
      <Route path="/admin/clients" exact strict component={ClientPage}/>
      <Route path="/admin/inventory" exact strict component={InventoryContainer}/>
      <Route path="/admin/inventory/create" exact strict component={CreateProductContainer}/>
      <Route
        path="/admin/clients/:email"
        exact
        strict
        render={({match}) => <ClientInfoContainer email={match.params.email}/>}
      />
      <Route
        path="/admin/inventory/:prodId"
        exact
        strict
        render={({match}) => <UpdateProductContainer prodId={match.params.prodId}/>}
      />
      <Route
        path="/admin/sales/:saleId"
        exact
        strict
        render={({match}) => <SaleInfoContainer saleId={match.params.saleId}/>}
      />
      <Route path="/admin/purchase-orders/add" exact strict component={PurchaseOrderAddContainer}/>
      <Route path="/admin/sales" exact strict component={SalesContainer}/>
      <Route path="/admin/purchase-orders" exact strict component={PurchaseOrderContainer}/>
      <Route path="/admin/discounts" exact strict component={DiscountPageContainer}/>
      <Redirect path="/admin/403"/>
    </Switch>
  );
}
