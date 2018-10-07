import {Box, Flex} from 'rebass';
import {colors, keyframes} from 'styles';

import GraffitiText from 'components/ui/GraffitiText';
import Logo from 'components/ui/Logo';
import React from 'react';

export default ({onExitPreview}) => (
  <Flex
    alignItems="center"
    css={`
      animation: fadein 3s ease-in-out;
      height: 100vh;
      width: 100vw;
      ${keyframes.fadein};
    `}
    flexDirection="column"
    justifyContent="center"
    onClick={onExitPreview}>
    <Box bg={colors.blackAlpha} p={[3, 5]} width="100%">
      <Logo />
      <Box
        css={`
          cursor: pointer;
          :hover {
            color: ${colors.secondary};
          }
        `}
        mt={3}>
        <GraffitiText>Spray it</GraffitiText>
      </Box>
    </Box>
  </Flex>
);
