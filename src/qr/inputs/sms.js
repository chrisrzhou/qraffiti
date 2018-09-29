export default {
  value: 'sms',
  label: 'SMS',
  fields: [
    {
      id: 'number',
      label: 'Number',
      placeholder: '+123-324-4324',
      type: 'text',
    },
    {
      id: 'message',
      label: 'Message',
      placeholder: 'Hello world',
      type: 'textarea',
    },
  ],
  getInputString: ({number, message}) => {
    return `SMSTO:${number}:SMSText:${message}`;
  },
};
