import {colors, keyframes} from 'styles';

import {Flex} from 'rebass';
import Logo from 'components/ui/Logo';
import QRCode from './QRCode';
import React from 'react';
import {connect} from 'react-redux';
import {getLogoImageData} from 'redux/qr/selectors';

const Preview = ({logoImageData, qr, onExitPreview}) => {
  const {bodyColors, bodyPattern, eyeColors, eyePattern, inputString} = qr;
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
          bodyColors={bodyColors}
          bodyPattern={bodyPattern}
          eyeColors={eyeColors}
          eyePattern={eyePattern}
          inputString={inputString}
          logoImageData={logoImageData}
          maxSize={200}
        />
      </Flex>
    </Flex>
  );
};

export default connect(({qr}) => ({
  logoImageData: getLogoImageData(qr),
  qr,
}))(Preview);
