export default {
  value: 'bitcoin',
  label: 'Bitcoin',
  fields: [
    {
      id: 'address',
      label: 'Address',
      placeholder: '123456789',
      type: 'text',
    },
    {
      id: 'amount',
      label: 'Amount',
      placeholder: '0.01',
      type: 'number',
    },
  ],
  getInputString: ({address, amount}) => {
    return `bitcoin:${address}?amount=${amount}`;
  },
};
