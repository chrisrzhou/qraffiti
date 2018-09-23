import {Box} from 'rebass';
import React from 'react';

const isSelectedCSS = `background: white; color: black;`;

export default ({children, isSelected, onClick}) => (
  <Box
    css={`
      ${isSelected ? isSelectedCSS : ''} cursor: pointer;
      :hover {
        background: white;
        color: black;
      }
    `}
    p={1}
    ml={3}
    onClick={onClick}>
    {children}
  </Box>
);
