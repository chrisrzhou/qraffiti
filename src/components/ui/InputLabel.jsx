import {Box, Flex, Text} from 'rebass';

import React from 'react';
import {colors} from 'styles';

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
            background: ${colors.grayAlpha};
            border: none;
            color: ${colors.black};
            transition: all 0.5s ease-in-out;
            width: 100%;

            :focus {
              background: ${colors.whiteAlpha};
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
