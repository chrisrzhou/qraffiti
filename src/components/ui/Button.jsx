import {Box} from 'rebass';
import React from 'react';
import {colors} from 'styles';

export default ({label, type, onClick}) => (
  <Box
    css={`
      button {
        background: ${colors.white};
        border-radius: 4px;
        color: ${colors.black};
        cursor: pointer;
        outline: none;
        padding: 4px 8px;

        :hover {
          background: ${colors.whiteAlpha};
        }
      }
    `}>
    <button type={type}>{label}</button>
  </Box>
);
