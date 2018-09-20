import QRCode from './QRCode';
import React from 'react';

export default class App extends React.PureComponent {
  state = {
    errorCorrectionLevel: 'L',
    colorDark: 'black',
    colorLight: 'white',
    size: 400,
    text: 'Hello world',
  };

  render() {
    const {
      errorCorrectionLevel,
      colorDark,
      colorLight,
      size,
      text,
    } = this.state;
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>colorDark</div>
        <input
          type="text"
          value={colorDark}
          onChange={e => this.setState({colorDark: e.target.value})}
        />
        <div>colorLight</div>
        <input
          type="text"
          value={colorLight}
          onChange={e => this.setState({colorLight: e.target.value})}
        />
        <div>errorCorrectionLevel</div>
        <input
          type="text"
          value={errorCorrectionLevel}
          onChange={e => this.setState({errorCorrectionLevel: e.target.value})}
        />
        <div>Size</div>
        <input
          type="number"
          value={size}
          onChange={e => this.setState({size: e.target.value})}
        />
        <div>Text</div>
        <input
          type="text"
          value={text}
          onChange={e => this.setState({text: e.target.value})}
        />
        <QRCode
          colorDark={colorDark}
          colorLight={colorLight}
          errorCorrectionLevel={errorCorrectionLevel}
          size={size}
          text={text}
        />
      </div>
    );
  }
}
