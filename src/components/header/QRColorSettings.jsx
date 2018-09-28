import {Flex, Text} from 'rebass';
import {setQREyeColors, setQRPixelColors} from 'redux/actions';

import ColorPicker from 'components/ui/ColorPicker';
import React from 'react';
import Row from 'components/ui/Row';
import {connect} from 'react-redux';

const QRColorSettings = ({
  eyeColors,
  pixelColors,
  setQREyeColors,
  setQRPixelColors,
}) => {
  return (
    <Flex flexDirection="column" mb={3}>
      <Text>Pixel colors</Text>
      <Row
        items={[
          <ColorPicker
            color={pixelColors[0]}
            onChange={color => {
              const colors = [color, pixelColors[1]];
              setQRPixelColors(colors);
            }}
          />,
          <ColorPicker
            color={pixelColors[1]}
            onChange={color => {
              const colors = [pixelColors[0], color];
              setQRPixelColors(colors);
            }}
          />,
        ]}
        mb={3}
        mt={1}
      />
      <Text>Eye colors</Text>
      <Row
        items={[
          <ColorPicker
            color={eyeColors[0]}
            onChange={color => {
              const colors = [color, eyeColors[1]];
              setQREyeColors(colors);
            }}
          />,
          <ColorPicker
            color={eyeColors[1]}
            onChange={color => {
              const colors = [eyeColors[0], color];
              setQREyeColors(colors);
            }}
          />,
        ]}
        mb={3}
        mt={1}
      />
    </Flex>
  );
};

const mapStateToProps = state => ({
  eyeColors: state.eyeColors,
  pixelColors: state.pixelColors,
});

export default connect(
  mapStateToProps,
  {setQREyeColors, setQRPixelColors},
)(QRColorSettings);
