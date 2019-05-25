import { createStore, applyMiddleware } from 'redux';
//import reduxPromiseMiddleware from 'redux-promise-middleware';
import reducer from './dux/reducer';

export default createStore(
    reducer,
    //applyMiddleware(reduxPromiseMiddleware())
);