import {Box} from 'rebass';
import React from 'react';
import {colors} from 'styles';

export default ({label, type, onClick, ...otherProps}) => (
  <Box
    css={`
      button {
      	background: ${colors.primary};
      	border: 1px solid ${colors.blackAlpha};
      	cursor: pointer;
        font-size: 10px;
      	font-weight: bold;
        padding: 10px 20px;
      	text-transform: uppercase;

        :focus {
          outline: none;
        }

      	&:hover {
          background: white;
        }
    `}
    p={1}
    {...otherProps}>
    <button onClick={onClick} type={type}>
      {label}
    </button>
  </Box>
);
