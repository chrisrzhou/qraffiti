export default {
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
};
