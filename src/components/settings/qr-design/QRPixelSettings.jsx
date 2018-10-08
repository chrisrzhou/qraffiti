import {Flex, Text} from 'rebass';
import {
  setBodyColors,
  setBodyPattern,
  setEyeColors,
  setEyePattern,
} from 'redux/qr/actions';

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
  bodyColors,
  bodyPattern,
  setEyeColors,
  setEyePattern,
  setBodyColors,
  setBodyPattern,
  type,
}) => {
  let colors;
  let pattern;
  let setColors;
  let setPattern;
  if (type === 'eyes') {
    colors = eyeColors;
    pattern = eyePattern;
    setColors = setEyeColors;
    setPattern = setEyePattern;
  } else {
    colors = bodyColors;
    pattern = bodyPattern;
    setColors = setBodyColors;
    setPattern = setBodyPattern;
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
        {Object.values(patterns)
          .filter(pattern => pattern.type === 'both' || pattern.type === type)
          .map(({label, renderer, value}) => (
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
    bodyColors: qr.bodyColors,
    bodyPattern: qr.bodyPattern,
  }),
  {
    setEyeColors,
    setEyePattern,
    setBodyColors,
    setBodyPattern,
  },
)(QRPixelSettings);
