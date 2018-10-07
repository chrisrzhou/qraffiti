import {createStore} from 'redux';
import rootReducer from './reducers';

const reduxDevTools =
  typeof window !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined;

export default createStore(rootReducer, reduxDevTools);
