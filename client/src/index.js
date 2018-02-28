import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { render } from 'react-dom';
import { BrowserRouter as Router , Route } from 'react-router-dom'

import CreateCarCtrl from './car/create/ctrl'
ReactDOM.render(<App />, document.getElementById('root'));



ReactDOM.render((
  <Router>
    <div>
      <Route path="/cars/new" component={CreateCarCtrl} />
    </div>
  </Router>
), document.getElementById('root'))


registerServiceWorker();
