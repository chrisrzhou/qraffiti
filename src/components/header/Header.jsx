import {Flex} from 'rebass';
import GraffitiText from 'components/ui/GraffitiText';
import HeaderTabs from './HeaderTabs';
import {Link} from 'gatsby';
import React from 'react';

export default () => (
  <Flex
    css={`
      position: relative;
    `}
    bg="rgba(0, 0, 0, 0.7)"
    flexDirection="column"
    justifyContent="center"
    py={3}>
    <Link to={'/'}>
      <GraffitiText fontSize={[70, 100]}>
        <span style={{color: 'red'}}>qr</span>
        affiti
      </GraffitiText>
    </Link>
    <HeaderTabs />
  </Flex>
);
