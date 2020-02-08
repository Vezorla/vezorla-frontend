import React, { useState } from 'react';

import img1 from '../../assets/images/img-1.JPG'
import img2 from '../../assets/images/img-2.JPG'
import img3 from '../../assets/images/img-3.JPG'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import Shop from './components/shopPage/Shop';
import CartList from '../shopPage/CardList';
import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';

// import CardPrice from './components/productPage/CardPrice'

// import Stepper from './components/Utils/Stepper'

function App() {
  const [id, setId] = useState(0);

  let cardItemfunc = (idIn)=>{
    setId(idIn);
  };

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

  function addCartHandle(val1) {
    console.log(val1);
  }

  //props need to array have img object.
  // img obj (imgPath + label)
  const imgs = [
    {
      imgPath: img1,
      label: "hello"
    },
    {
      imgPath: img2,
      label: "ok"
    }
  ];

  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Shop list={list}/> */}
        <CartList list={list} />
      </Router>
      {/* <CardPrice quantity={10} price="100" addCartHandle = {addCartHandle}/> */}
      {/* <Stepper imgs={imgs}/> */}
      <Footer />
    </div>
  );
}

export default App;
