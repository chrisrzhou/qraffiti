import {Box} from 'rebass';
import React from 'react';

const isSelectedCSS = `background: white; color: black;`;

export default ({children, isSelected, onClick}) => (
  <Box
    css={`
      ${isSelected ? isSelectedCSS : ''} cursor: pointer;
      :hover {
        background: #666;
        color: black;
      }
    `}
    p={1}
    onClick={onClick}>
    {children}
  </Box>
);
