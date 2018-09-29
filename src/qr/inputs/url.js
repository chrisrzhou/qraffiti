export default {
  value: 'url',
  label: 'URL',
  fields: [
    {
      id: 'url',
      label: 'URL',
      placeholder: 'https://qraffiti.chrisrzhou.io',
      type: 'url',
    },
  ],
  getInputString: data => {
    return data.url;
  },
};
