import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'

import 'bulma/css/bulma.css';
import './styles.scss';

import { reducer } from './reducers'

const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Home />
        </Router>
    </Provider>, rootElement);
