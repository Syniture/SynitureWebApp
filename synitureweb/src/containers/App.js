import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Landing from './landing/Landing.js';

import Layout from '../components/layout/Layout';


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/' exact component={Landing} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
