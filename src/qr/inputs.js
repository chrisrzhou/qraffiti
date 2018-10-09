import {createInput} from 'qr/utils';

export default {
  url: createInput({
    id: 'url',
    fields: [
      {
        id: 'url',
        placeholder: 'https://qraffiti.chrisrzhou.io',
        type: 'url',
      },
    ],
    getInputString: data => {
      return data.url;
    },
  }),
  text: createInput({
    id: 'text',
    fields: [
      {
        id: 'text',
        placeholder: 'Hello world',
        type: 'textarea',
      },
    ],
    getInputString: data => {
      return data.text;
    },
  }),
  email: createInput({
    id: 'email',
    fields: [
      {
        id: 'email',
        placeholder: 'christopher.r.zhou@gmail.com',
        type: 'email',
      },
      {
        id: 'subject',
        placeholder: 'Qraffiti Feedback',
        type: 'text',
      },
      {
        id: 'body',
        placeholder: 'Hello world',
        type: 'textarea',
      },
    ],
    getInputString: ({email, subject, body}) => {
      return `MATMSG:TO:${email};SUB:${subject};BODY:${body};;`;
    },
  }),
  wifi: createInput({
    id: 'wifi',
    fields: [
      {
        id: 'ssid',
        placeholder: 'My Network Name',
        type: 'text',
      },
      {
        id: 'type',
        placeholder: 'WPA',
        type: 'text',
      },
      {
        id: 'password',
        placeholder: 'mypassword',
        type: 'password',
      },
    ],
    getInputString: ({ssid, type, password}) => {
      return `WIFI:S:${ssid};T:${type};P:${password};`;
    },
  }),
  phone: createInput({
    id: 'phone',
    fields: [
      {
        id: 'number',
        placeholder: '+123-324-4324',
        type: 'text',
      },
    ],
    getInputString: ({number}) => {
      return `TEL:${number}`;
    },
  }),
  sms: createInput({
    id: 'sms',
    fields: [
      {
        id: 'number',
        placeholder: '+123-324-4324',
        type: 'text',
      },
      {
        id: 'message',
        placeholder: 'Hello world',
        type: 'textarea',
      },
    ],
    getInputString: ({number, message}) => {
      return `SMSTO:${number}:SMSText:${message}`;
    },
  }),
  event: createInput({
    id: 'event',
    fields: [
      {
        id: 'event',
        placeholder: 'Hackathon',
        type: 'text',
      },
      {
        id: 'summary',
        placeholder: 'Hello world',
        type: 'textarea',
      },
      {
        id: 'dateStart',
        type: 'datetime-local',
      },
      {
        id: 'dateEnd',
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
  }),
  bitcoin: createInput({
    id: 'bitcoin',
    fields: [
      {
        id: 'address',
        type: 'text',
        placeholder: '123456789',
      },
      {
        id: 'amount',
        type: 'number',
        placeholder: '0.01',
      },
    ],
    getInputString: ({address, amount}) => {
      return `bitcoin:${address}?amount=${amount}`;
    },
  }),
};
