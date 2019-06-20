import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import rootReducer from './reducers';
import Counter from './components/Counter';

const rootElement = document.getElementById('root'),
      store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  rootElement
);
