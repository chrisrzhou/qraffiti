import {createAction, createActionTypes} from 'redux/utils';

export const actionTypes = createActionTypes('qr', [
  'HYDRATE_STATE',
  'SET_BACKGROUND_COLORS',
  'SET_BACKGROUND_IMAGE',
  'SET_BODY_COLORS',
  'SET_BODY_PATTERN',
  'SET_EYE_COLORS',
  'SET_EYE_PATTERN',
  'SET_INPUT',
  'SET_INPUT_TYPE',
  'SET_LOGO',
  'SET_PRESET',
]);

export const hydrateState = createAction(actionTypes.HYDRATE_STATE);

export const setBackgroundColors = createAction(
  actionTypes.SET_BACKGROUND_COLORS,
);

export const setBackgroundImage = createAction(
  actionTypes.SET_BACKGROUND_IMAGE,
);

export const setBodyColors = createAction(actionTypes.SET_BODY_COLORS);

export const setBodyPattern = createAction(actionTypes.SET_BODY_PATTERN);

export const setEyeColors = createAction(actionTypes.SET_EYE_COLORS);

export const setEyePattern = createAction(actionTypes.SET_EYE_PATTERN);

export const setInput = createAction(actionTypes.SET_INPUT);

export const setInputType = createAction(actionTypes.SET_INPUT_TYPE);

export const setLogo = createAction(actionTypes.SET_LOGO);

export const setPreset = createAction(actionTypes.SET_PRESET);
