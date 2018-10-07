const createActionTypes = actionNames => {
  let actionTypes = {};
  actionNames.forEach(actionName => {
    actionTypes[actionName] = actionName;
  });
  return actionTypes;
};

export const actionTypes = createActionTypes([
  'SET_BACKGROUND_COLORS',
  'SET_BACKGROUND_IMAGE',
  'SET_QR_EYE_COLORS',
  'SET_QR_EYE_PATTERN',
  'SET_QR_INPUT',
  'SET_QR_INPUT_TYPE',
  'SET_QR_PIXEL_COLORS',
  'SET_QR_PIXEL_PATTERN',
  'SET_SELECTED_TAB',
  'SET_SHOW_SETTINGS',
]);

export const setBackgroundColors = backgroundColors => ({
  type: actionTypes.SET_BACKGROUND_COLORS,
  payload: {backgroundColors},
});

export const setBackgroundImage = backgroundImage => ({
  type: actionTypes.SET_BACKGROUND_IMAGE,
  payload: {backgroundImage},
});

export const setQREyeColors = eyeColors => ({
  type: actionTypes.SET_QR_EYE_COLORS,
  payload: {eyeColors},
});

export const setQREyePattern = eyePattern => ({
  type: actionTypes.SET_QR_EYE_PATTERN,
  payload: {eyePattern},
});

export const setQRInput = (inputType, inputData, inputString) => ({
  type: actionTypes.SET_QR_INPUT,
  payload: {inputData, inputType, inputString},
});

export const setQRInputType = inputType => ({
  type: actionTypes.SET_QR_INPUT_TYPE,
  payload: {inputType},
});

export const setQRPixelColors = pixelColors => ({
  type: actionTypes.SET_QR_PIXEL_COLORS,
  payload: {pixelColors},
});

export const setQRPixelPattern = pixelPattern => ({
  type: actionTypes.SET_QR_PIXEL_PATTERN,
  payload: {pixelPattern},
});

export const setSelectedTab = selectedTab => ({
  type: actionTypes.SET_SELECTED_TAB,
  payload: {selectedTab},
});

export const setShowSettings = showSettings => ({
  type: actionTypes.SET_SHOW_SETTINGS,
  payload: {showSettings},
});
