import {Flex} from 'rebass';
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
    justifyContent="space-between"
    p={2}>
    <Logo size={20} />
    <Music />
    <div>support</div>
  </Flex>
);
