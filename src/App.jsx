import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLanguage } from './DBHandlers/Language'
import { useGetPages } from './DBHandlers/Pages';
import Nav from './components/Partials/Nav';
import Footer from './components/Partials/Footer';


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
            ? pages.map(page => {
              if (page.url.includes('cart')) {
                return <Route key={page.url} path={page.url} exact component={require(`./components/Cart/${page.component}`).default} />
              }
              return <Route key={page.url} path={page.url} exact component={require(`./components/${page.component}`).default} />
            })
            : null}

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
