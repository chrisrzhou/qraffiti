import React from 'react';
import {Text} from 'rebass';
import {connect} from 'react-redux';

const GraffitiText = ({color, children, font, fontSize}) => (
  <Text color={color} fontFamily={font} fontSize={fontSize} textAlign="center">
    {children}
  </Text>
);

GraffitiText.defaultProps = {
  fontSize: [16, 20],
};

const mapStateToProps = state => ({
  font: state.font,
});

export default connect(mapStateToProps)(GraffitiText);
