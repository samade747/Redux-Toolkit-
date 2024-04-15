// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import store from "./store/reducers/index";


// import store from './store';
import App from './App';
// import store from './store/reducers/index.jsx';
import store from './store/index';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
