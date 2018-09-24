export default {
  url: {
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
  },
  text: {
    value: 'text',
    label: 'Text',
    fields: [
      {id: 'text', label: 'Text', placeholder: 'Hello world', type: 'textarea'},
    ],
    getInputString: data => {
      return data.text;
    },
  },
  email: {
    value: 'email',
    label: 'Email',
    fields: [
      {
        id: 'email',
        label: 'Email',
        placeholder: 'christopher.r.zhou@gmail.com',
        type: 'email',
      },
      {
        id: 'subject',
        label: 'Subject',
        placehoolder: 'Qraffiti Feedback',
        type: 'text',
      },
      {id: 'body', label: 'Body', placeholder: 'Hello world', type: 'textarea'},
    ],
    getInputString: ({email, subject, body}) => {
      return `MATMSG:TO:${email};SUB:${subject};BODY:${body};;`;
    },
  },
  wifi: {
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
  },
  phone: {
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
  },
  sms: {
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
  },
  event: {
    value: 'event',
    label: 'Event',
    fields: [
      {
        id: 'event',
        label: 'Event',
        placeholder: 'Hackathon',
        type: 'text',
      },
      {
        id: 'summary',
        label: 'Summary',
        placeholder: 'Hello world',
        type: 'textarea',
      },
      {
        id: 'dateStart',
        label: 'Start',
        type: 'datetime-local',
      },
      {
        id: 'dateEnd',
        label: 'End',
        type: 'datetime-local',
      },
    ],
    getInputString: ({event, summary, dateStart, dateEnd}) => {
      return `
          BEGIN:VEVENT
          SUMMARY:${summary}
          DTSTART:${dateStart}
          DTEND:${dateEnd}
          END:VEVENT
        `;
    },
  },
  bitcoin: {
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
  },
};
