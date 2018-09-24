import {actionTypes} from './actions';
import backgrounds from 'backgrounds';
import fonts from 'fonts';

const getInitialState = () => ({
  backgrounds,
  fonts,
  backgroundImage: backgrounds[0].value,
  font: fonts[0].value,
  showSettings: false,
  inputData: {},
  inputString: 'https://qraffiti.chrisrzhou.io',
  inputType: 'url',
});

export default (state = getInitialState(), action) => {
  const {payload, type} = action;
  switch (type) {
    case actionTypes.SET_BACKGROUND_IMAGE:
      return {
        ...state,
        backgroundImage: payload.backgroundImage,
      };
    case actionTypes.SET_FONT:
      return {
        ...state,
        font: payload.font,
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
