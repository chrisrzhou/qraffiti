export default {
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
};
