import {Box} from 'rebass';
import React from 'react';
import {colors} from 'styles';

const isSelectedCSS = `
  background: ${colors.primary};
  color: ${colors.black};
`;

export default ({children, isSelected, onClick}) => (
  <Box
    css={`
      cursor: pointer;
      :hover {
        background: ${colors.grayAlpha};
        color: ${colors.black};
      }
      ${isSelected ? isSelectedCSS : ''};
    `}
    onClick={onClick}
    p={1}>
    {children}
  </Box>
);
