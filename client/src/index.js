import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { render } from 'react-dom';
import { BrowserRouter as Router , Route } from 'react-router-dom'

import Car from './App'
ReactDOM.render(<App />, document.getElementById('root'));



ReactDOM.render((
  <Router>
    <div>
      <Route path="/cara" component={Car} />
    </div>
  </Router>
), document.getElementById('root'))


registerServiceWorker();
