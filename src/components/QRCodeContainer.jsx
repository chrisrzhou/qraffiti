import QRCode from './QRCode';
import React from 'react';
import {connect} from 'react-redux';
import {getLogoImage} from 'redux/qr/selectors';

const QRCodeContainer = ({logoImage, maxSize, qr}) => {
  const {
    backgroundColors,
    backgroundImage,
    bodyColors,
    bodyPattern,
    eyeColors,
    eyePattern,
    inputString,
  } = qr;
  return (
    <QRCode
      backgroundColors={backgroundColors}
      backgroundImage={backgroundImage}
      bodyColors={bodyColors}
      bodyPattern={bodyPattern}
      eyeColors={eyeColors}
      eyePattern={eyePattern}
      inputString={inputString}
      logoImage={logoImage}
      maxSize={maxSize}
    />
  );
};

export default connect(({qr}) => ({
  logoImage: getLogoImage(qr.logo),
  qr,
}))(QRCodeContainer);
