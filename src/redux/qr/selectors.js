const PARAM_WHITELIST_FIELDS = [
  'bodyColors',
  'bodyPattern',
  'eyeColors',
  'eyePattern',
  'inputData',
  'inputType',
  'logo',
];

export const getUrlParam = state => {
  let urlParams = {};
  for (const field in state) {
    if (PARAM_WHITELIST_FIELDS.includes(field)) {
      if (field === 'inputData') {
        urlParams.inputData = state.inputData[state.inputType];
      } else {
        urlParams[field] = state[field];
      }
    }
  }
  return btoa(JSON.stringify(urlParams));
};

export const getLogoImageData = ({logo}) => {
  return logo ? require(`assets/logos/${logo}.svg`) : null;
};
