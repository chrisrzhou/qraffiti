import {Box, Flex} from 'rebass';
import {colors, keyframes} from 'styles';

import GraffitiText from 'components/ui/GraffitiText';
import Logo from 'components/ui/Logo';
import QRCodeContainer from './QRCodeContainer';
import React from 'react';

export default ({onExitPreview}) => {
  return (
    <Flex
      alignItems="center"
      css={`
        animation: fadein 1s ease-in-out;
        cursor: pointer;
        height: 100vh;
        width: 100vw;
        ${keyframes.fadein};
      `}
      justifyContent="center"
      onClick={onExitPreview}>
      <Flex
        alignItems="center"
        bg={colors.blackAlpha}
        flexDirection="column"
        width="100%"
        p={3}>
        <Logo />
        <Box my={3}>
          <QRCodeContainer maxSize={200} />
        </Box>
        <GraffitiText
          css={`
            :hover {
              color: ${colors.secondary};
            }
          `}>
          Start
        </GraffitiText>
      </Flex>
    </Flex>
  );
};
