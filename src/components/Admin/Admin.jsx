import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import ClientPage from './Clients/logic/ClientPage';
import ClientInfoContainer from './ClientInfo/logic/ClientInfoContainer';
import SettingContainer from './Setting/logic/SettingContainer';
import CreateProductContainer from './Product/logic/CreateProductContainer';
import PurchaseOrderContainer from "./PurchaseOrder/PurchaseOrder-container";

export default function Admin() {
  return (
    <Switch>
      <Route path="/admin/settings" exact strict component={SettingContainer}/>
      <Route path="/admin/client" exact strict component={ClientPage}/>
      <Route path="/admin/inventory/create" exact strict component={CreateProductContainer}/>
      <Route
        path="/admin/client/:clientid"
        exact
        strict
        render={({match}) => <ClientInfoContainer clientId={match.params.productid}/>}
      />
      <Route path="/admin/purchase-orders" exact strict component={PurchaseOrderContainer}/>
      <Redirect to="/admin/403"/>
    </Switch>
  );
}
