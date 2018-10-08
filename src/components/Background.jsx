import {Box} from 'rebass';
import React from 'react';
import {connect} from 'react-redux';
import {keyframes} from 'styles';

const Background = ({backgroundImage}) => (
  <Box
    css={`
      background-image: ${backgroundImage};
      background-size: cover;
      animation: fadein 3s ease-in-out;
      height: 100vh;
      position: fixed;
      width: 100vw;
      z-index: -1; /* always below */
      ${keyframes.fadein};
    `}
    key={backgroundImage}
  />
);

export default connect(({app}) => ({
  backgroundImage: app.backgroundImage,
}))(Background);
