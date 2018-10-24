import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import tasksReducer from './reducers';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import  thunk  from 'redux-thunk';
import logger from './middleware/logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = (state={}, action) => {
    return {
        tasks: tasksReducer(state.tasks, action)
    }
};

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, thunk )));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
