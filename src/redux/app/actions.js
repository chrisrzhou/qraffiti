import {createAction, createActionTypes} from 'redux/utils';

export const actionTypes = createActionTypes('app', [
  'SET_BACKGROUND_COLORS',
  'SET_BACKGROUND_IMAGE',
  'SET_PREVIEW',
  'SET_SELECTED_TAB',
]);

export const setBackgroundColors = createAction(
  actionTypes.SET_BACKGROUND_COLORS,
);

export const setBackgroundImage = createAction(
  actionTypes.SET_BACKGROUND_IMAGE,
);

export const setPreview = createAction(actionTypes.SET_PREVIEW);

export const setSelectedTab = createAction(actionTypes.SET_SELECTED_TAB);
