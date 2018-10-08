import {colors, keyframes} from 'styles';

import {Flex} from 'rebass';
import Logo from 'components/ui/Logo';
import QRCodeContainer from './QRCodeContainer';
import React from 'react';

export default ({onExitPreview}) => {
  return (
    <Flex
      alignItems="center"
      css={`
        animation: fadein 1s ease-in-out;
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
        <QRCodeContainer maxSize={200} />
      </Flex>
    </Flex>
  );
};
