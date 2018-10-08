import {actionTypes} from './actions';
import {createReducers} from 'redux/utils';

const getInitialState = () => ({
  eyeColors: ['#9b1b1b', '#ff0000'],
  eyePattern: 'base',
  imageHref: null,
  inputData: {},
  inputString: 'https://qraffiti.chrisrzhou.io',
  inputType: 'url',
  bodyColors: ['#210c60', '#0e685b'],
  bodyPattern: 'base',
});

export default createReducers(getInitialState(), {
  [actionTypes.HYDRATE_STATE]: (state, {payload}) => {
    return {
      ...state,
      ...payload,
    };
  },
  [actionTypes.SET_EYE_COLORS]: (state, {payload}) => ({
    ...state,
    eyeColors: payload,
  }),
  [actionTypes.SET_EYE_PATTERN]: (state, {payload}) => ({
    ...state,
    eyePattern: payload,
  }),
  [actionTypes.SET_IMAGE_HREF]: (state, {payload}) => ({
    ...state,
    imageHref: payload,
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
  [actionTypes.SET_INPUT_TYPE]: (state, {payload}) => ({
    ...state,
    inputType: payload,
  }),
  [actionTypes.SET_BODY_COLORS]: (state, {payload}) => ({
    ...state,
    bodyColors: payload,
  }),
  [actionTypes.SET_BODY_PATTERN]: (state, {payload}) => ({
    ...state,
    bodyPattern: payload,
  }),
});
