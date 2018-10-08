import {actionTypes} from './actions';
import {createReducers} from 'redux/utils';

const getInitialState = () => ({
  bodyColors: ['#210c60', '#0e685b'],
  bodyPattern: 'base',
  eyeColors: ['#9b1b1b', '#ff0000'],
  eyePattern: 'base',
  inputData: {},
  inputString: 'https://qraffiti.chrisrzhou.io',
  inputType: 'url',
  logo: null,
});

export default createReducers(getInitialState(), {
  [actionTypes.HYDRATE_STATE]: (state, {payload}) => {
    return {
      ...state,
      ...payload,
    };
  },
  [actionTypes.SET_BODY_COLORS]: (state, {payload}) => ({
    ...state,
    bodyColors: payload,
  }),
  [actionTypes.SET_BODY_PATTERN]: (state, {payload}) => ({
    ...state,
    bodyPattern: payload,
  }),
  [actionTypes.SET_EYE_COLORS]: (state, {payload}) => ({
    ...state,
    eyeColors: payload,
  }),
  [actionTypes.SET_EYE_PATTERN]: (state, {payload}) => ({
    ...state,
    eyePattern: payload,
  }),
  [actionTypes.SET_INPUT]: (state, {payload}) => {
    const {inputData, inputString, inputType} = payload;
    return {
      ...state,
      inputData: {
        ...state.inputData,
        [inputType]: inputData,
      },
      inputString,
      inputType,
    };
  },
  [actionTypes.SET_LOGO]: (state, {payload}) => ({
    ...state,
    logo: payload,
  }),
  [actionTypes.SET_INPUT_TYPE]: (state, {payload}) => ({
    ...state,
    inputType: payload,
  }),
});
