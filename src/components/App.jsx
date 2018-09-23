import {Flex} from 'rebass';
import QRCode from './QRCode';
import React from 'react';
import {connect} from 'react-redux';
import {setRandomBackgroundImage} from 'redux/actions';

class App extends React.PureComponent {
  state = {
    settings: {
      canvasSize: 400,
      backgroundColors: ['rgba(0, 0, 0, 0)'],
      errorCorrectionLevel: 'L',
      foregroundColors: ['black'],
    },
    text: 'Hello world',
  };

  componentDidMount() {
    const {setRandomBackgroundImage} = this.props;
    this.backgroundInterval = setInterval(setRandomBackgroundImage, 8000);
  }

  componentWillUnmount() {
    if (this.backgroundInterval) {
      clearInterval(this.backgroundInterval);
    }
  }

  render() {
    const {settings, text} = this.state;
    return (
      <Flex flexDirection="column">
        <QRCode renderer="base" settings={settings} text={text} />
      </Flex>
    );
  }
}

export default connect(
  null,
  {setRandomBackgroundImage},
)(App);
