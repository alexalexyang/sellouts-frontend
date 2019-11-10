import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLanguage } from './DBHandlers/Language'
import { useGetPages } from './DBHandlers/Pages';
import Home from './components/Home';
import Cart from './components/Cart';
import Products from './components/Products';
import Product from './components/Product';
import Nav from './components/Partials/Nav';
import Footer from './components/Partials/Footer';
import ShippingAddress from './components/Cart/ShippingAddress'
import Payment from './components/Cart/Payment'
import Success from './components/Cart/Success'
import { ContentfulClient } from './DBHandlers/ContentfulClient';


require('dotenv').config()

function App() {
  const language = useLanguage()
  useGetPages()
  const pages = useSelector(state => state.pages)

  return (
    <Router>
      <div className="App">
        <Nav language={language} />
        <Switch>
          {pages && Object.keys(pages).length > 0
            ? pages.map(page => (
              <Route path={page.url} exact component={require(`./components/${page.component}`).default} />
            ))
            : null}

              // Required: /, /products, /product/:id, /cart and the rest below.

          <Route path='/shipping' component={ShippingAddress} />
          <Route path='/payment' component={Payment} />
          <Route path='/success' component={Success} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
