import React from 'react';
import Nav from './components/Nav';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Products from './components/Products';
import Product from './components/Product';
import Footer from './components/Footer';
import ShippingAddress from './components/ShippingAddress';

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
          <Route path='/address' component={ShippingAddress} />
        </Switch>
        <p><Link to='/products'>Products</Link></p>
        <p><Link to='/address'>address</Link></p>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
