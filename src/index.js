import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Table from './components/UIKit/Table';
import 'normalize.css';

const App = () => (
  <Provider store={store}>
    <Table />
  </Provider>
)

render(<App />, document.getElementById('root'));
