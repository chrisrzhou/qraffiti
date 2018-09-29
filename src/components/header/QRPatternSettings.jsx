import {setQREyePattern, setQRPixelPattern} from 'redux/actions';

import {Flex} from 'rebass';
import React from 'react';
import Row from 'components/ui/Row';
import {connect} from 'react-redux';

const QRPatternSettings = ({
  eyePattern,
  pixelPattern,
  setQREyePattern,
  setQRPixelPattern,
}) => {
  return (
    <Flex flexDirection="column" mb={3}>
      <Row items={[]} mb={3} mt={1} />
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
