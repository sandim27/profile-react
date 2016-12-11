import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Layout from './containers/Layout';
import MySalon from './containers/MySalon';
import Location from './containers/Location';
import Services from './containers/Services';
import Artists from './containers/Artists';
import WorkingHours from './containers/WorkingHours';
import Gallery from './containers/Gallery';
import Brands from './containers/Brands';
import NotFound from './components/NotFound';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={MySalon}/>
      <Route path="location" component={Location}/>
      <Route path="services" component={Services}/>
      <Route path="artists" component={Artists}/>
      <Route path="workinghours" component={WorkingHours}/>
      <Route path="gallery" component={Gallery}/>
      <Route path="brands" component={Brands}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));
