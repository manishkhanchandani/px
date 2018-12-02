import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

export const middlewares = [ReduxThunk];//, createLogger()
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
export default createStoreWithMiddleware(rootReducer);