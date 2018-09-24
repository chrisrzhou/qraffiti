import {createStore} from 'redux';
import reducer from './reducer';

const reduxDevTools =
  typeof window !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined;

export default createStore(reducer, reduxDevTools);
