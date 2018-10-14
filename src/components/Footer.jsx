import {Flex} from 'rebass';
import {Logo} from '@chrisrzhou/ui';
import React from 'react';
import {colors} from 'styles';

export default () => (
  <Flex
    alignItems="center"
    bg={colors.blackAlpha}
    css={`
      bottom: 0px;
      position: fixed;
      left: 0;
      right: 0;
      z-index: -1; /* always below */
    `}
    justifyContent="space-between"
    px={2}
    py={1}>
    <Logo size={20} />
    <a href="https://github.com/chrisrzhou/qraffiti">Github</a>
  </Flex>
);
