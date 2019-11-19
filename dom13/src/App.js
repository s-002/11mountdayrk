import React from 'react';
import CartDom from './component/cart'
import store from './store/store.js'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
     <CartDom/>
    </Provider>
  );
}

export default App;
