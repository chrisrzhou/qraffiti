import {Box, Flex, Text} from 'rebass';

import React from 'react';

const InputLabel = ({label, id, type}) => (
  <Flex alignItems="center">
    <label htmlFor={id}>
      <Text
        css={`
          text-transform: uppercase;
        `}
        mr={2}>
        {label}
      </Text>
    </label>
    <Box
      css={`
        input {
          background: rgba(255, 255, 255, 0.3);
          border: none;
          color: black;
          transition: all 0.2s ease-out;
          width: 100px;

          :focus {
            background: rgba(255, 255, 255, 0.8);
            outline: none;
            width: 100%;
          }
        }
      `}>
      <input id={id} type={type} />
    </Box>
  </Flex>
);

InputLabel.defaultProps = {
  type: 'text',
};

export default InputLabel;
