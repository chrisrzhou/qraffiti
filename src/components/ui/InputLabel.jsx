import {Box, Flex, Text} from 'rebass';

import React from 'react';
import {colors} from 'styles';

const InputLabel = ({label, id, placeholder, type, value}) => {
  const input =
    type === 'textarea' ? (
      <textarea
        id={id}
        defaultValue={value}
        placeholder={placeholder}
        rows={5}
      />
    ) : (
      <input
        id={id}
        step="any"
        type={type}
        defaultValue={value}
        placeholder={placeholder}
      />
    );
  return (
    <Flex justifyContent="space-between" my={1} width="100%">
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
            background: ${colors.whiteAlpha};
            border: none;
            color: ${colors.black};
            transition: all 0.5s ease-in-out;
            width: 100%;

            :focus {
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
