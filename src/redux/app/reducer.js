import {actionTypes} from './actions';
import bgArt from 'assets/backgrounds/art.jpg';
import {createReducers} from 'redux/utils';

const getInitialState = () => ({
  backgroundColors: ['#D2E495', '#BDA5C5'],
  backgroundImage: `url(${bgArt})`,
  selectedTab: 'input',
  showSettings: false,
});

export default createReducers(getInitialState(), {
  [actionTypes.SET_BACKGROUND_COLORS]: (state, {payload}) => ({
    ...state,
    backgroundColors: payload,
    backgroundImage: `linear-gradient(90deg, ${payload[0]}, ${payload[1]})`,
  }),
  [actionTypes.SET_BACKGROUND_IMAGE]: (state, {payload}) => ({
    ...state,
    backgroundImage: payload,
    showSettings: false,
  }),
  [actionTypes.SET_SELECTED_TAB]: (state, {payload}) => ({
    ...state,
    selectedTab: payload,
    showSettings: true,
  }),
  [actionTypes.SET_SHOW_SETTINGS]: (state, {payload}) => ({
    ...state,
    showSettings: payload,
  }),
});
