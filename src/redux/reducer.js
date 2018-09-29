import {actionTypes} from './actions';
import backgrounds from 'backgrounds';

const getInitialState = () => ({
  backgroundColors: ['#D2E495', '#D590EA'],
  backgroundImage: backgrounds[0].value,
  playMusic: false,
  showSettings: false,
  inputData: {},
  inputString: 'https://qraffiti.chrisrzhou.io',
  inputType: 'url',
  eyeColors: ['#9b1b1b', '#ff0000'],
  pixelColors: ['#210c60', '#0e685b'],
});

export default (state = getInitialState(), action) => {
  const {payload, type} = action;
  switch (type) {
    case actionTypes.SET_PLAY_MUSIC:
      return {
        ...state,
        playMusic: payload.playMusic,
      };
    case actionTypes.SET_BACKGROUND_COLORS:
      return {
        ...state,
        backgroundColors: payload.backgroundColors,
      };
    case actionTypes.SET_BACKGROUND_IMAGE:
      return {
        ...state,
        backgroundImage: payload.backgroundImage,
        showSettings: false,
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
        showSettings: false,
      };
    }
    case actionTypes.SET_QR_INPUT_TYPE:
      return {
        ...state,
        inputType: payload.inputType,
      };
    case actionTypes.SET_QR_EYE_COLORS:
      return {
        ...state,
        eyeColors: payload.eyeColors,
      };
    case actionTypes.SET_QR_PIXEL_COLORS:
      return {
        ...state,
        pixelColors: payload.pixelColors,
      };
    case actionTypes.SET_SHOW_SETTINGS:
      return {
        ...state,
        showSettings: payload.showSettings,
      };
    default:
      return state;
  }
};
