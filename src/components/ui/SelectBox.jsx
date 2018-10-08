import {Box} from 'rebass';
import React from 'react';
import {colors} from 'styles';

const isSelectedCSS = `
  background: ${colors.primary};
  color: ${colors.black};
`;

export default ({children, isSelected, onClick, ...otherProps}) => (
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
    p={1}
    {...otherProps}>
    {children}
  </Box>
);
