import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import routes from './routing-config'
import { NoMatch } from './components';
import { Show,Counter,Home, BasicRouting, Blocking, Miss, QueryParams, Recursive, Login, ProtectedPage, CounterPage, FetchPage } from './components';
import fakeAuth from './Auth'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
              <li><NavLink to="/" activeClassName="active"><h2><font color="black">Counter</font></h2></NavLink></li>
              <li><NavLink to="/show" activeClassName="active"><h2><font color="black">show</font></h2></NavLink></li>

            </ul>
          </div>
          <div className="App-intro">
            <Switch>

                      <Route path="/" component={Counter} exact={true} />
                      <Route path="/Show" component={Show} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;