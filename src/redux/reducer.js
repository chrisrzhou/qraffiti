import {actionTypes} from './actions';
import backgrounds from 'backgrounds';

const getInitialState = () => ({
  backgrounds,
  backgroundColors: ['#D2E495', '#D590EA'],
  backgroundImage: backgrounds[0].value,
  showSettings: false,
  inputData: {},
  inputString: 'https://qraffiti.chrisrzhou.io',
  inputType: 'url',
});

export default (state = getInitialState(), action) => {
  const {payload, type} = action;
  switch (type) {
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
    case actionTypes.SET_SHOW_SETTINGS:
      return {
        ...state,
        showSettings: payload.showSettings,
      };
    default:
      return state;
  }
};
