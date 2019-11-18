import React from 'react';
import Router from './router/router'
import store from './store/index.js'
import {Provider} from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
