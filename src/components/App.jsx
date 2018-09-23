import Background from 'components/Background';
import {Flex} from 'rebass';
import QRCode from 'components/QRCode';
import QRInput from 'components/QRInput';
import QRSettings from 'components/QRSettings';
import React from 'react';

export default class App extends React.PureComponent {
  state = {
    settings: {
      canvasSize: 400,
      backgroundColors: ['rgba(0, 0, 0, 0)'],
      errorCorrectionLevel: 'L',
      foregroundColors: ['black'],
    },
    text: 'Hello world',
  };

  render() {
    const {settings, text} = this.state;
    return (
      <Flex flexDirection="column">
        <Background backgroundColors={settings.backgroundColors} />
        <QRCode renderer="base" settings={settings} text={text} />
      </Flex>
    );
  }
}
