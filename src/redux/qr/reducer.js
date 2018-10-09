import {actionTypes} from './actions';
import {createReducers} from 'redux/utils';
import presets from 'qr/presets';

export const getInitialState = () => ({
  backgroundColors: ['#FFFFFF', '#FFFA9E'],
  backgroundImage: null,
  bodyColors: ['#FEC564', '#D9317A'],
  bodyPattern: 'base',
  eyeColors: ['#D9317A', '#D9317A'],
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
  [actionTypes.SET_BACKGROUND_COLORS]: (
    state,
    {payload: backgroundColors},
  ) => ({
    ...state,
    backgroundColors,
    backgroundImage: null,
  }),
  [actionTypes.SET_BACKGROUND_IMAGE]: (state, {payload: backgroundImage}) => ({
    ...state,
    backgroundImage,
    showSettings: false,
  }),
  [actionTypes.SET_BODY_COLORS]: (state, {payload: bodyColors}) => ({
    ...state,
    bodyColors,
  }),
  [actionTypes.SET_BODY_PATTERN]: (state, {payload: bodyPattern}) => ({
    ...state,
    bodyPattern,
  }),
  [actionTypes.SET_EYE_COLORS]: (state, {payload: eyeColors}) => ({
    ...state,
    eyeColors,
  }),
  [actionTypes.SET_EYE_PATTERN]: (state, {payload: eyePattern}) => ({
    ...state,
    eyePattern,
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
  [actionTypes.SET_LOGO]: (state, {payload: logo}) => ({
    ...state,
    logo,
  }),
  [actionTypes.SET_INPUT_TYPE]: (state, {payload: inputType}) => ({
    ...state,
    inputType,
  }),
  [actionTypes.SET_PRESET]: (state, {payload: preset}) => ({
    ...state,
    ...presets[preset],
  }),
});
