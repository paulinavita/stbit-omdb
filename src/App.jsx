import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';

import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx';
import NoMatchPage from './components/404.jsx';
import Detail from './components/Detail.jsx';

export const App = () => (
  <Router>
      <Layout>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/details/:movieId' exact component={Detail}/>
          <Route text={'Page'} component={NoMatchPage} />
        </Switch>
      </Layout>
  </Router>
)
export default App
