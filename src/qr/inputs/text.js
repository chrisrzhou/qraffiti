export default {
  value: 'text',
  label: 'Text',
  fields: [
    {id: 'text', label: 'Text', placeholder: 'Hello world', type: 'textarea'},
  ],
  getInputString: data => {
    return data.text;
  },
};
