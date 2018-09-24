import {Box, Flex, Text} from 'rebass';

import React from 'react';

const InputLabel = ({label, id, type}) => {
  const input =
    type === 'textarea' ? (
      <textarea rows={5} id={id} />
    ) : (
      <input id={id} type={type} />
    );
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      my={1}
      width="100%">
      <label htmlFor={id}>
        <Text
          css={`
            text-transform: uppercase;
          `}
          mr={3}
          textAlign="right"
          width={100}>
          {label}
        </Text>
      </label>
      <Box
        css={`
          flex-grow: 1;
          input,
          textarea {
            background: rgba(255, 255, 255, 0.3);
            border: none;
            color: black;
            transition: all 0.5s ease-in-out;
            width: 100%;

            :focus {
              background: rgba(255, 255, 255, 0.8);
              outline: none;
            }
          }
        `}>
        {input}
      </Box>
    </Flex>
  );
};

InputLabel.defaultProps = {
  type: 'text',
};

export default InputLabel;
