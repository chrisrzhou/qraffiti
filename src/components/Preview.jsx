import {colors, keyframes} from 'styles';

import {Flex} from 'rebass';
import Logo from 'components/ui/Logo';
import QRCode from './QRCode';
import React from 'react';
import {connect} from 'react-redux';

const Preview = ({qr, onExitPreview}) => {
  const {eyeColors, eyePattern, inputString, pixelColors, pixelPattern} = qr;
  return (
    <Flex
      alignItems="center"
      css={`
        animation: fadein 3s ease-in-out;
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
        p={[1, 3]}>
        <Logo />
        <QRCode
          eyeColors={eyeColors}
          eyePattern={eyePattern}
          inputString={inputString}
          maxSize={200}
          pixelColors={pixelColors}
          pixelPattern={pixelPattern}
        />
      </Flex>
    </Flex>
  );
};

export default connect(({qr}) => ({qr}))(Preview);
