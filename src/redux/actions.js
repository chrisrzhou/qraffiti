export const actionTypes = {
  SET_BACKGROUND_IMAGE: 'SET_BACKGROUND_IMAGE',
  SET_FONT: 'SET_FONT',
};

export const setBackgroundImage = backgroundImage => ({
  type: actionTypes.SET_BACKGROUND_IMAGE,
  payload: {backgroundImage},
});

export const setFont = font => ({
  type: actionTypes.SET_FONT,
  payload: {font},
});
