import {actionTypes} from 'redux/actions';
import bgArt from 'assets/backgrounds/art.jpg';

const getInitialState = () => ({
  backgroundColors: ['#D2E495', '#BDA5C5'],
  backgroundImage: `url(${bgArt})`,
  showSettings: false,
});

export default (state = getInitialState(), action) => {
  const {payload, type} = action;
  switch (type) {
    case actionTypes.SET_BACKGROUND_COLORS: {
      const {backgroundColors} = payload;
      return {
        ...state,
        backgroundColors,
        backgroundImage: `linear-gradient(90deg, ${backgroundColors[0]}, ${
          backgroundColors[1]
        })`,
      };
    }
    case actionTypes.SET_BACKGROUND_IMAGE:
      return {
        ...state,
        backgroundImage: payload.backgroundImage,
        showSettings: false,
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
