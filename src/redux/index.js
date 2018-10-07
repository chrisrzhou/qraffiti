import app from './app/reducer';
import {combineReducers} from 'redux';
import qr from './qr/reducer';

export default combineReducers({app, qr});
