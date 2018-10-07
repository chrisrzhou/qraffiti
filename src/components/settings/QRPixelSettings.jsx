import {Flex, Text} from 'rebass';
import {
  setQREyeColors,
  setQREyePattern,
  setQRPixelColors,
  setQRPixelPattern,
} from 'redux/actions';

import ColorPicker from 'components/ui/ColorPicker';
import QRPatternPreview from './QRPatternPreview';
import React from 'react';
import Row from 'components/ui/Row';
import {connect} from 'react-redux';
import patterns from 'qr/patterns';
import {settingsContentWidth} from 'styles';

const QRPixelSettings = ({
  eyeColors,
  eyePattern,
  pixelColors,
  pixelPattern,
  setQREyeColors,
  setQREyePattern,
  setQRPixelColors,
  setQRPixelPattern,
  type,
}) => {
  let colors;
  let pattern;
  let setColors;
  let setPattern;
  if (type === 'eyes') {
    colors = eyeColors;
    pattern = eyePattern;
    setColors = setQREyeColors;
    setPattern = setQREyePattern;
  } else {
    colors = pixelColors;
    pattern = pixelPattern;
    setColors = setQRPixelColors;
    setPattern = setQRPixelPattern;
  }
  return (
    <Flex alignItems="center" flexDirection="column">
      <Text>Colors</Text>
      <Row
        items={[
          <ColorPicker
            color={colors[0]}
            onChange={color => {
              setColors([color, colors[1]]);
            }}
          />,
          <ColorPicker
            color={colors[1]}
            onChange={color => {
              setColors([colors[0], color]);
            }}
          />,
        ]}
        mb={4}
        mt={1}
      />
      <Flex
        justifyContent="center"
        flexWrap="wrap"
        width={settingsContentWidth}>
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
    </Flex>
  );
};

export default connect(
  ({qr}, ownProps) => ({
    eyeColors: qr.eyeColors,
    eyePattern: qr.eyePattern,
    pixelColors: qr.pixelColors,
    pixelPattern: qr.pixelPattern,
  }),
  {
    setQREyeColors,
    setQREyePattern,
    setQRPixelColors,
    setQRPixelPattern,
  },
)(QRPixelSettings);
