import {Box} from 'rebass';
import React from 'react';
import {colors} from 'styles';

const isSelectedCSS = `
  background: ${colors.white};
  color: ${colors.black};
`;

export default ({children, isSelected, onClick}) => (
  <Box
    css={`
      ${isSelected ? isSelectedCSS : ''} cursor: pointer;
      :hover {
        background: ${colors.grayAlpha};
        color: ${colors.black};
      }
    `}
    p={1}
    onClick={onClick}>
    {children}
  </Box>
);
