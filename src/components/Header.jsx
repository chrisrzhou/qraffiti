import AppSettings from 'components/AppSettings';
import {Flex} from 'rebass';
import GraffitiText from 'components/GraffitiText';
import React from 'react';

export default () => (
  <Flex
    bg="rgba(0, 0, 0, 0.6)"
    flexDirection="column"
    justifyContent="center"
    p={3}>
    <GraffitiText fontSize={[50, 100, 150]}>qraffiti</GraffitiText>
    <AppSettings />
  </Flex>
);
