import GraffitiText from 'components/ui/GraffitiText';
import {Link} from 'gatsby';
import React from 'react';
import {colors} from 'styles';

export default ({onClick}) => (
  <Link to={'/'} onClick={onClick}>
    <GraffitiText fontSize={[70, 100]}>
      <span style={{color: colors.secondary}}>qr</span>
      affiti
    </GraffitiText>
  </Link>
);
