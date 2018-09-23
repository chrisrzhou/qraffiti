import {Box} from 'rebass';
import React from 'react';

export default function({children, onClick}) {
  return (
    <Box
      css={`
        cursor: pointer;
        :hover {
          color: red;
        }
      `}
      onClick={onClick}>
      {children}
    </Box>
  );
}
