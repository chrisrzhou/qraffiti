import {Box} from 'rebass';
import GraffitiText from 'components/ui/GraffitiText';
import React from 'react';
import {colors} from 'styles';

export default ({onClick}) => (
  <Box
    css={`
      cursor: pointer;
    `}
    onClick={onClick}>
    <GraffitiText fontSize={[70, 100]}>
      <span style={{color: colors.secondary}}>qr</span>
      affiti
    </GraffitiText>
  </Box>
);
