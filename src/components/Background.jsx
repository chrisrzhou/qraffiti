import {Box, Flex} from 'rebass';

import ActionButton from 'components/ActionButton';
import React from 'react';
import bg1 from 'images/bg1.jpg';
import bg2 from 'images/bg2.jpg';
import bg3 from 'images/bg3.jpg';
import bg4 from 'images/bg4.jpg';
import bg5 from 'images/bg5.jpg';
import bg6 from 'images/bg6.jpg';
import bg7 from 'images/bg7.jpg';
import bg8 from 'images/bg8.jpg';
import bg9 from 'images/bg9.jpg';

const BACKGROUNDS = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9];

export default class Background extends React.PureComponent {
  state = {
    backgroundIndex: 0,
  };

  render() {
    const {backgroundColors} = this.props;
    const {backgroundIndex} = this.state;
    return (
      <Flex
        key={backgroundIndex}
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        css={`
          background: ${backgroundColors[0]};
          background-image: url(${BACKGROUNDS[backgroundIndex]});
          background-image: -webkit-linear-gradient(
              left,
              rgba(0, 0, 0, 0.9) 0%,
              rgba(0, 0, 0, 0) 20%,
              rgba(0, 0, 0, 0) 80%,
              rgba(0, 0, 0, 0.9) 100%
            ),
            url(${BACKGROUNDS[backgroundIndex]});
          background-size: cover;
          animation: fadein 4s;

          @keyframes fadein {
            from {
              opacity: 0.1;
            }
            to {
              opacity: 1;
            }
          }
        `}>
        {this.props.children}
        <Flex
          bg="rgba(0, 0, 0, 0.2)"
          alignItems="center"
          justifyContent="space-between"
          p={1}
          width="100%">
          <ActionButton onClick={this._previousBackground}>◀</ActionButton>
          <ActionButton onClick={this._nextBackground}>ON</ActionButton>
          <ActionButton onClick={this._nextBackground}>▶</ActionButton>
        </Flex>
      </Flex>
    );
  }

  _previousBackground = () => {
    this.setState(prevState => ({
      backgroundIndex:
        (prevState.backgroundIndex === 0
          ? BACKGROUNDS.length - 1
          : prevState.backgroundIndex - 1) % BACKGROUNDS.length,
    }));
  };

  _nextBackground = () => {
    this.setState(prevState => ({
      backgroundIndex: (prevState.backgroundIndex + 1) % BACKGROUNDS.length,
    }));
  };
}
