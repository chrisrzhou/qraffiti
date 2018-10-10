import {Box} from 'rebass';
import React from 'react';

export default ({src, onClick}) => (
  <Box
    css={`
      border: 2px solid white;
      :hover {
        border: 2px solid red;
      }
    `}
    m={1}
    onClick={onClick}>
    <img
      style={{
        height: 120,
        width: 160,
      }}
      src={src}
    />
  </Box>
);
