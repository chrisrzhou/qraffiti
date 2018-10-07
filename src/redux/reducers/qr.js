import {actionTypes} from 'redux/actions';

const getInitialState = () => ({
  eyeColors: ['#9b1b1b', '#ff0000'],
  eyePattern: 'base',
  inputData: {},
  inputString: 'https://qraffiti.chrisrzhou.io',
  inputType: 'url',
  pixelPattern: 'base',
  pixelColors: ['#210c60', '#0e685b'],
});

export default (state = getInitialState(), action) => {
  const {payload, type} = action;
  switch (type) {
    case actionTypes.SET_QR_EYE_COLORS:
      return {
        ...state,
        eyeColors: payload.eyeColors,
      };
    case actionTypes.SET_QR_EYE_PATTERN:
      return {
        ...state,
        eyePattern: payload.eyePattern,
      };
    case actionTypes.SET_QR_INPUT: {
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
    }
    case actionTypes.SET_QR_INPUT_TYPE:
      return {
        ...state,
        inputType: payload.inputType,
      };
    case actionTypes.SET_QR_PIXEL_COLORS:
      return {
        ...state,
        pixelColors: payload.pixelColors,
      };
    case actionTypes.SET_QR_PIXEL_PATTERN:
      return {
        ...state,
        pixelPattern: payload.pixelPattern,
      };
    default:
      return state;
  }
};
