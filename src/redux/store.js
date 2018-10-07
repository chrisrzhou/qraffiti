import appReducer from './app/reducer';
import {combineReducers} from 'redux';
import {createStore} from 'redux';
import qrReducer from './qr/reducer';

const reducer = combineReducers({
  app: appReducer,
  qr: qrReducer,
});

const reduxDevTools =
  typeof window !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined;

export default createStore(reducer, reduxDevTools);
