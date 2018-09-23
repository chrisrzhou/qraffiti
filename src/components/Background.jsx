import {Box} from 'rebass';
import React from 'react';
import {connect} from 'react-redux';
import shortid from 'shortid';

const Background = ({background, backgroundImage}) => (
  <Box
    key={shortid()}
    css={`
      background: ${background};
      background-image: url(${backgroundImage});
      background-size: cover;
      animation: fadein 4s;
      bottom: 0;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
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
