const PARAM_WHITELIST_FIELDS = [
  'eyeColors',
  'eyePattern',
  'inputData',
  'inputType',
  'bodyColors',
  'bodyPattern',
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
