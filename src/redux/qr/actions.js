import {createAction, createActionTypes} from 'redux/utils';

export const actionTypes = createActionTypes('qr', [
  'SET_BACKGROUND_COLORS',
  'SET_BACKGROUND_IMAGE',
  'SET_EYE_COLORS',
  'SET_EYE_PATTERN',
  'SET_IMAGE_HREF',
  'SET_INPUT',
  'SET_INPUT_TYPE',
  'SET_PIXEL_COLORS',
  'SET_PIXEL_PATTERN',
  'SET_SELECTED_TAB',
  'SET_SHOW_SETTINGS',
]);

export const setImageHref = createAction(actionTypes.SET_IMAGE_HREF);

export const setEyeColors = createAction(actionTypes.SET_EYE_COLORS);

export const setEyePattern = createAction(actionTypes.SET_EYE_PATTERN);

export const setInput = createAction(actionTypes.SET_INPUT);

export const setInputType = createAction(actionTypes.SET_INPUT_TYPE);

export const setPixelColors = createAction(actionTypes.SET_PIXEL_COLORS);

export const setPixelPattern = createAction(actionTypes.SET_PIXEL_PATTERN);
