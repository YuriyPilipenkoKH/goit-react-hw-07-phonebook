import React from 'react';
import ReactDOM from 'react-dom/client';
import {  store } from 'redux/store';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import  App  from 'App/App';
import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

          {/* <PersistGate loading={null} 
          persistor={persistor}
          > */}
        <App />
      {/* </PersistGate> */}
    </Provider>
  
  </React.StrictMode>
);
