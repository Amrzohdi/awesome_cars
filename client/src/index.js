import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { render } from 'react-dom';
import { BrowserRouter as Router , Route} from 'react-router-dom'

import CreateCarCtrl from './car/create/ctrl'
import UpdateCarCtrl from './car/create/update_ctrl'
import ListCarsCtrl from './car/list/ctrl'
ReactDOM.render(<App />, document.getElementById('root'));



ReactDOM.render((
  <Router>
    <div>
      <Route path="/cars/create" component={CreateCarCtrl} />
      <Route path="/cars/update/:id" component={UpdateCarCtrl} />
      <Route exact path="/" component={ListCarsCtrl}/>
      <Route exact path="/cars" component={ListCarsCtrl}/>
    </div>
  </Router>
), document.getElementById('root'))


registerServiceWorker();
