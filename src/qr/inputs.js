export default {
  url: {
    value: 'url',
    label: 'URL',
    fields: [{id: 'url', label: 'URL', type: 'url'}],
    getInputString: data => {
      return data.url;
    },
  },
  text: {
    value: 'text',
    label: 'Text',
    fields: [{id: 'text', label: 'Text', type: 'textarea'}],
    getInputString: data => {
      return data.text;
    },
  },
  email: {
    value: 'email',
    label: 'Email',
    fields: [
      {id: 'email', label: 'Email', type: 'email'},
      {id: 'subject', label: 'Subject', type: 'text'},
      {id: 'body', label: 'Body', type: 'textarea'},
    ],
    getInputString: ({email, subject, body}) => {
      return `MATMSG:TO:${email};SUB:${subject};BODY:${body};;`;
    },
  },
};
