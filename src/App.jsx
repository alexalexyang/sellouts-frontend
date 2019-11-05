import React from 'react';
import Nav from './components/Nav';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Products from './components/Products';
import Product from './components/Product';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path='/' exact component={Products} />
          <Route path='/cart' component={Cart} />
          <Route path='/product/:id' component={Product} />
        </Switch>

        <footer>
          <p>Made by Alex</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
