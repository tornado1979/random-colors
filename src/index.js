/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/

import registerServiceWorker from './registerServiceWorker'
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import {Provider} from 'react-redux'
import store from './redux/store'
import 'bootstrap'

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker()
