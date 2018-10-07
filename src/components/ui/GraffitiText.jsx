import React from 'react';
import {Text} from 'rebass';

const GraffitiText = ({color, children, font, fontSize}) => (
  <Text
    color={color}
    fontFamily="Megrim, Arial"
    fontSize={fontSize}
    textAlign="center">
    {children}
  </Text>
);

GraffitiText.defaultProps = {
  fontSize: [16, 20],
};

export default GraffitiText;
