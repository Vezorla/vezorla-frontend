import React, { useState } from 'react';

import img1 from '../../assets/images/img-1.JPG'
import img2 from '../../assets/images/img-2.JPG'
import img3 from '../../assets/images/img-3.JPG'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import Shop from '../shopPage/Shop'
import Header from '../common/header/header';
import Footer from '../common/footer/footer';
import Product from '../productPage/Product';

//Dummy data
const list = [
  {
    id: 1,
    name: "abc",
    subdescription: "abcsd",
    harvest: "12-2-1231",
    image: [img1, img2],
    oldprice: 123,
    currentprice: 1234
  },
  {
    id: 2,
    name: "asc",
    subdescription: "aqd",
    harvest: "12-2-4321",
    image: [img2, img3],
    oldprice: 123,
    currentprice: 1234
  }
];

//-------App--------------
function App() {
  
  //state
  const [lineItems, setLineItems] = useState(0)

  //increate Cart function
  const increaseCart = () => {    
    setLineItems(lineItems+1) 
  }

  return (
    <div className="App">
      
      <Header quantity={lineItems}/>
      <Router>
          {/* <Route path={["/","/index"]} exact strict component={Home}/> */}
          {/* <Route path={["/cart","/cart/:userid"]} exact strict component={Cart}/> */}
          <Route path="/shop" exact strict component={Shop}/>
          {/* <Route path="/findus" exact strict component={FindUs}/> */}
          {/* <Route path="/contact" exact strict component={Contact}/> */}
          {/* <Route path="/about" exact strict component={About}/> */}

          <Route path="/product/:productid" exact strict 
            render={() => <Product addCartHandle={increaseCart}/>}
          />
      </Router>

      <Footer />
    </div>
  );
}

export default App;
