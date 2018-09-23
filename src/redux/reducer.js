import {actionTypes} from 'redux/actions';
import backgrounds from 'backgrounds';
import fonts from 'fonts';

const getInitialState = () => ({
  backgrounds,
  fonts,
  backgroundImage: backgrounds[0].value,
  font: fonts[0].value,
  text: 'Hello world',
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
    default:
      return state;
  }
};
