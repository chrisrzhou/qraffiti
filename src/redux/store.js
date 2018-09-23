import {createStore} from 'redux';
import reducer from './reducer';

let reduxDevTools;

if (typeof window !== 'undefined') {
  reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
}

export default createStore(reducer, reduxDevTools);
