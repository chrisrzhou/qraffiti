import {Box} from 'rebass';
import React from 'react';
import {connect} from 'react-redux';

const Background = ({background, backgroundImage}) => (
  <Box
    key={background + backgroundImage}
    css={`
      background: ${background};
      background-image: url(${backgroundImage});
      background-size: cover;
      animation: fadein 4s ease-in-out;
      height: 100vh;
      position: fixed;
      width: 100vw;
      z-index: -1; /* always below */

      @keyframes fadein {
        from {
          opacity: 0.1;
        }
        to {
          opacity: 1;
        }
      }
    `}
  />
);

const mapStateToProps = state => ({
  backgroundImage: state.backgroundImage,
});

export default connect(mapStateToProps)(Background);
