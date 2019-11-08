import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Products from './components/Products';
import Product from './components/Product';
import Nav from './components/Partials/Nav';
import Footer from './components/Partials/Footer';
import ShippingAddress from './components/Cart/ShippingAddress'
import Payment from './components/Cart/Payment'
import Success from './components/Cart/Success'

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={Products} />
          <Route path='/cart' component={Cart} />
          <Route path='/product/:id' component={Product} />
          <Route path='/shipping' component={ShippingAddress} />
          <Route path='/payment' component={Payment} />
          <Route path='/success' component={Success} />
        </Switch>
        <p><Link to='/products'>Products</Link></p>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
