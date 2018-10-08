import {actionTypes} from './actions';
import {createReducers} from 'redux/utils';

const getInitialState = () => ({
  backgroundColors: ['rgba(255, 255, 255, 1)', 'rgba(230, 255, 255, 1)'],
  backgroundImage: null,
  bodyColors: ['rgba(30, 10, 90, 1)', 'rgba(20, 50, 20, 1)'],
  bodyPattern: 'base',
  eyeColors: ['rgba(80, 30, 30, 1)', 'rgba(200, 50, 50, 1)'],
  eyePattern: 'base',
  inputData: {},
  inputString: 'https://qraffiti.chrisrzhou.io',
  inputType: 'url',
  logo: null,
});

export default createReducers(getInitialState(), {
  [actionTypes.HYDRATE_STATE]: (state, {payload}) => {
    const {inputData, ...rest} = payload;
    return {
      ...state,
      ...rest,
      inputData: {
        ...state.inputData,
        [payload.inputType]: inputData,
      },
    };
  },
  [actionTypes.SET_BACKGROUND_COLORS]: (state, {payload}) => ({
    ...state,
    backgroundColors: payload,
    backgroundImage: null,
  }),
  [actionTypes.SET_BACKGROUND_IMAGE]: (state, {payload}) => ({
    ...state,
    backgroundImage: payload,
    showSettings: false,
  }),
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
