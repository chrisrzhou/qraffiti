export const getUrlParam = state => {
  let urlParams = {};
  for (const field in state) {
    if (field === 'inputData') {
      // only capture relevant input data based on the input type
      urlParams.inputData = state.inputData[state.inputType];
    } else {
      urlParams[field] = state[field];
    }
  }
  return btoa(JSON.stringify(urlParams));
};

export const getLogoImage = ({logo}) => {
  return logo ? require(`assets/logos/${logo}.svg`) : null;
};
