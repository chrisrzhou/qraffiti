import {Box, Flex, Text} from 'rebass';

import React from 'react';
import {colors} from 'styles';

const InputLabel = ({id, label, placeholder, type, value}) => {
  const input =
    type === 'textarea' ? (
      <textarea
        defaultValue={value}
        id={id}
        placeholder={placeholder}
        rows={5}
      />
    ) : (
      <input
        defaultValue={value}
        id={id}
        placeholder={placeholder}
        step="any"
        type={type}
      />
    );
  return (
    <Flex alignItems="center" justifyContent="space-between" my={1}>
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
            font-size: 10px;
            padding: 4px 8px;
            resize: vertical;
            width: 150px;

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
