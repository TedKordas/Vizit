import { createStore, applyMiddleware } from 'redux';
//import promiseMiddleware from 'redux-promise';
import reducer from './dux/reducer';

export default createStore(
    reducer,
    //applyMiddleware(promiseMiddleware())
);