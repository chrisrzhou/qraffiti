import {Box} from 'rebass';
import React from 'react';
import {colors} from 'styles';

export default ({label, type, onClick, ...otherProps}) => (
  <Box
    css={`
      button {
      	background: ${colors.primary};
      	border: none;
      	cursor: pointer;
      	font-weight: bold;
        padding: 10px 20px;
      	position: relative;
      	text-transform: uppercase;

        :focus {
          outline: none;
        }

      	&:after, &:before {
      		border: 2px solid ${colors.blackAlpha};
      		bottom: 0;
      		content: '';
      		left: 0;
      		position: absolute;
      		right: 0;
      		top: 0;
      		transition: transform .3s;
        }
      	&:after {
      		transform: translate(3px, 3px);
        }
      	&:before {
      		transform: translate(-3px, -3px)
        }
      	&:hover {
          background: ${colors.grayAlpha};
      		&:after, &:before {
      			transform: translate(0);
          }
        }
    `}
    p={1}
    {...otherProps}>
    <button onClick={onClick} jtype={type}>
      {label}
    </button>
  </Box>
);
