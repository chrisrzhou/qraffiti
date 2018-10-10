import {Box} from 'rebass';
import React from 'react';
import {colors} from 'styles';

export default ({onClick, ...otherProps}) => {
  return (
    <Box
      css={`
        cursor: pointer;
        height: 32px;
        margin: auto;
        position: relative;
        width: 32px;
        :hover .leftright {
          transform: rotate(-45deg);
          background-color: ${colors.secondary};
        }
        :hover .rightleft {
          transform: rotate(45deg);
          background-color: ${colors.secondary};
        }
      `}
      onClick={onClick}
      {...otherProps}>
      <Box
        className="leftright"
        css={`
          background-color: ${colors.primary};
          border-radius: 2px;
          height: 4px;
          margin-top: 24px;
          position: absolute;
          transform: rotate(45deg);
          transition: all 0.3s ease-in;
          width: 32px;
        `}
      />
      <Box
        className="rightleft"
        css={`
          background-color: ${colors.primary};
          border-radius: 2px;
          height: 4px;
          margin-top: 24px;
          position: absolute;
          transform: rotate(-45deg);
          transition: all 0.3s ease-in;
          width: 32px;
        `}
      />
    </Box>
  );
};
