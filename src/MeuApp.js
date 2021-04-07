import React from 'react';
import Router from './Router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';
import reduxThunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const MeuApp = prop => (
    <Provider store={store}>
        <Router/>
    </Provider>    
)

export default MeuApp;