import GraffitiText from 'components/ui/GraffitiText';
import React from 'react';
import {colors} from 'styles';

export default ({onClick, ...otherProps}) => (
  <GraffitiText
    fontSize={[70, 100]}
    css={`
      cursor: pointer;
    `}
    onClick={onClick}
    {...otherProps}>
    <span style={{color: colors.secondary}}>qr</span>
    affiti
  </GraffitiText>
);
