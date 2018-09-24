import 'globalStyles';

import {Box, Flex} from 'rebass';
import {colors, keyframes} from 'styles';

import GraffitiText from 'components/ui/GraffitiText';
import Logo from 'components/ui/Logo';
import React from 'react';

export default ({onExitPreview}) => (
  <Flex
    css={`
      animation: fadein 3s ease-in-out;
      height: 100vh;
      width: 100vw;
      ${keyframes.fadein};
    `}
    flexDirection="column"
    alignItems="center"
    justifyContent="center">
    <Logo />
    <Box
      css={`
        cursor: pointer;
        :hover {
          color: ${colors.secondary};
        }
      `}
      mt={3}
      onClick={onExitPreview}>
      <GraffitiText>Spray it</GraffitiText>
    </Box>
  </Flex>
);
