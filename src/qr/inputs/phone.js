export default {
  value: 'phone',
  label: 'Phone',
  fields: [
    {
      id: 'number',
      label: 'Number',
      placeholder: '+123-324-4324',
      type: 'text',
    },
  ],
  getInputString: ({number}) => {
    return `TEL:${number}`;
  },
};
