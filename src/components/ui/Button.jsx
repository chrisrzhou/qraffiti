import {Box} from 'rebass';
import React from 'react';
import {colors} from 'styles';

export default ({label, type, onClick, ...otherProps}) => (
  <Box
    css={`
      button {
        background: ${colors.primary};
        border-radius: 4px;
        cursor: pointer;
        outline: none;
        padding: 4px 8px;
      }
    `}
    {...otherProps}>
    <button onClick={onClick} jtype={type}>
      {label}
    </button>
  </Box>
);
