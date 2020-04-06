import React, {useState} from 'react';
import {Switch, Route, Redirect, useLocation} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core';
import theme from '../../assets/styles/theme';
import Header from '../common/header/header';
import Footer from '../common/footer/footer';
import NotFound from '../common/404/NotFound';
import NotAuth from '../common/403/NotAuth';
import LoginContainer from '../login/logic/LoginContainer';
import RegisterContainer from '../Customer/registerPage/logic/RegisterContainer';
import ForgotPassContainer from '../Client/ForgotPassPage/logic/ForgotPassContainer';
import Customer from '../Customer/Customer';
import Client from '../Client/Client';
import Admin from '../Admin/Admin';
import ClientAuthHOC from '../common/HOC/ClientAuthHOC';
import AdminAuthHOC from '../common/HOC/AdminAuthHOC';
import CustomerAuthHOC from '../common/HOC/CustomerAuthHOC';
import HomeContainer from "../Home/Home-container";

// Function will run every time it goes to a new path or at first access of the application
function usePageViews(setLineItems, setAuth, setDone) {
  let location = useLocation();
  React.useEffect(
    () => {
      fetchAuth(setAuth, setDone);
      fetchCartLineItems(setLineItems);
    },
    [location]
  );
}

// Function will fetch for number of item in cart
const fetchCartLineItems = async (setLineItems) => {
  let data = await fetch(`http://localhost:8080/api/customer/cart/get`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return null;
    });

  if (data !== null) {
    setLineItems(data);
  }
};

const fetchAuth = async (setAuth, setDone) => {
  try {
    const response = await fetch('http://localhost:8080/api/auth/check-role', {
      method: 'GET',
      credentials: 'include',
      mode: 'cors'
    });
    if (response.status === 200) {
      const data = await response.json();
      if (data.admin === true) {
        setAuth('admin');
      } else {
        setAuth('client');
      }
    } else if (response.status >= 400) {
      setAuth('customer');
    }
  } catch (err) {
    setAuth('customer');
  }
  setDone(true);
};

//-------App--------------
function App() {
  //-------state------
  const [lineItems, setLineItems] = useState(0);
  const [auth, setAuth] = useState('customer');
  const [done, setDone] = useState(false);

  const authFunc = {
    setAuth: setAuth.bind(App)
  };

  const increaseCart = () => {
    fetchCartLineItems(setLineItems);
  };

  usePageViews(setLineItems, setAuth, setDone);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header cart={lineItems} auth={auth}/>
        <Switch>
          {/* <Route path="/" exact strict component={Testing} /> */}
          <Route path="/" exact strict component={HomeContainer}/>
          <Route path="/client" render={() => ClientAuthHOC(Client, auth)({done: done})}/>
          <Route path="/admin" render={() => AdminAuthHOC(Admin, auth)({done: done})}/>
          <Route path="/customer" render={() => <Customer increaseCart={increaseCart} auth={auth}/>}/>
          <Route
            path="/login"
            exact
            strict
            render={() => CustomerAuthHOC(LoginContainer, auth)({setAuth: authFunc.setAuth, done: done})}
          />
          <Route
            path="/register"
            exact
            strict
            render={() => CustomerAuthHOC(RegisterContainer, auth)({done: done})}
          />
          <Route
            path="/forgot"
            exact
            strict
            render={() => CustomerAuthHOC(ForgotPassContainer, auth)({done: done})}
          />
          <Route path="/403" component={NotAuth}/>
          <Route path="/404" component={NotFound}/>
          <Redirect to="/404"/>
        </Switch>
        {/*<Footer/>*/}
      </div>
    </ThemeProvider>
  );
}

export default App;
