import InputLabel from 'components/ui/InputLabel';
import React from 'react';

export default class QRInputURL extends React.PureComponent {
  render() {
    return (
      <form
        id="form1"
        onSubmit={e => {
          e.preventDefault();
          console.log(e.target.url.value);
        }}>
        <InputLabel id="url" label="URL" />
        <button type="submit" form="form1" value="Submit">
          Submit
        </button>
      </form>
    );
  }
}
