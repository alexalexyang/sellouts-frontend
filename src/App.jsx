import React from 'react';
import Nav from './components/Nav';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Products from './components/Products';
import Product from './components/Product';
import Footer from './components/Footer';

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
        </Switch>
        <Link to='/products'>Products</Link>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
