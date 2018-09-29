import {Box, Flex, Text} from 'rebass';

import {Logo} from '@chrisrzhou/ui';
import Music from './Music';
import React from 'react';
import {colors} from 'styles';

export default () => (
  <Flex
    css={`
      bottom: 0px;
      position: fixed;
      left: 0;
      right: 0;
      z-index: 1;
    `}
    alignItems="center"
    bg={colors.blackAlpha}
    p={3}>
    <Box width={1 / 3}>
      <Logo size={20} />
    </Box>
    <Flex justifyContent="center" width={1 / 3}>
      <Music />
    </Flex>
    <Box width={1 / 3}>
      <Text textAlign="right">
        <a href="https://github.com/chrisrzhou/qraffiti">Github</a>
      </Text>
    </Box>
  </Flex>
);
