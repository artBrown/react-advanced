import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux'
import { Provider } from 'react-redux';

import reducer from './reducers'

let store = createStore(reducer)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Provider store={store}><App /></Provider>, div)
});
