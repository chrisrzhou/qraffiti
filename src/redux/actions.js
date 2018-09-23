export const actionTypes = {
  SET_BACKGROUND_IMAGE: 'SET_BACKGROUND_IMAGE',
  SET_FONT: 'SET_FONT',
};

export const setBackgroundImage = backgroundImage => ({
  type: actionTypes.SET_BACKGROUND_IMAGE,
  paylod: {backgroundImage},
});

export const setFont = backgroundImage => ({
  type: actionTypes.SET_BACKGROUND_IMAGE,
  paylod: {backgroundImage},
});
