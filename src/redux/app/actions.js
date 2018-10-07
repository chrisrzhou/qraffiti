import {createAction, createActionTypes} from 'redux/utils';

export const actionTypes = createActionTypes('app', [
  'SET_BACKGROUND_COLORS',
  'SET_BACKGROUND_IMAGE',
  'SET_SELECTED_TAB',
  'SET_SHOW_SETTINGS',
]);

export const setBackgroundColors = createAction(
  actionTypes.SET_BACKGROUND_COLORS,
);

export const setBackgroundImage = createAction(
  actionTypes.SET_BACKGROUND_IMAGE,
);

export const setSelectedTab = createAction(actionTypes.SET_SELECTED_TAB);

export const setShowSettings = createAction(actionTypes.SET_SHOW_SETTINGS);
