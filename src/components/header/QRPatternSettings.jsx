import {setQREyePattern, setQRPixelPattern} from 'redux/actions';

import {Flex} from 'rebass';
import QRPatternPreview from './QRPatternPreview';
import React from 'react';
import {connect} from 'react-redux';
import patterns from 'qr/patterns';

const QRPatternSettings = ({
  eyePattern,
  pixelPattern,
  setQREyePattern,
  setQRPixelPattern,
  type,
}) => {
  const pattern = type === 'eyes' ? eyePattern : pixelPattern;
  const setPattern = type === 'eyes' ? setQREyePattern : setQRPixelPattern;
  return (
    <Flex justifyContent="center" flexWrap="wrap">
      {Object.values(patterns).map(({label, renderer, value}) => (
        <QRPatternPreview
          key={value}
          isSelected={pattern === value}
          label={label}
          renderer={renderer}
          type={type}
          onClick={() => setPattern(value)}
        />
      ))}
    </Flex>
  );
};

const mapStateToProps = state => ({
  eyePattern: state.eyePattern,
  pixelPattern: state.pixelPattern,
});

export default connect(
  mapStateToProps,
  {setQREyePattern, setQRPixelPattern},
)(QRPatternSettings);
