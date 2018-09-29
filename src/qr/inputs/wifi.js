export default {
  value: 'wifi',
  label: 'Wifi',
  fields: [
    {id: 'ssid', label: 'SSID', placeholder: 'My Network Name', type: 'text'},
    {id: 'type', label: 'Type', placeholder: 'WPA', type: 'text'},
    {
      id: 'password',
      label: 'Password',
      placeholder: 'mypassword',
      type: 'password',
    },
  ],
  getInputString: ({ssid, type, password}) => {
    return `WIFI:S:${ssid};T:${type};P:${password};`;
  },
};
