import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Loginpage from "./Loginpage";
import { createStore, } from "redux";
import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducer";
import App from './App';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const store = (createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 0 }}>
      <App />
    </div>
  </Provider>,
  rootEl
);




// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
