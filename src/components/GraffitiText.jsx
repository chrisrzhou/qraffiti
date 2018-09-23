import React from 'react';
import {Text} from 'rebass';
import {connect} from 'react-redux';

const GraffitiText = ({children, font, fontSize}) => (
  <Text fontFamily={font} fontSize={fontSize} textAlign="center">
    {children}
  </Text>
);

GraffitiText.defaultProps = {
  fontSize: [18, 24],
};

const mapStateToProps = state => ({
  font: state.font,
});

export default connect(mapStateToProps)(GraffitiText);
