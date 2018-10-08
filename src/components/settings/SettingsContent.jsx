import {Box, Flex} from 'rebass';
import {colors, keyframes} from 'styles';

import AppBackgroundSettings from './AppBackgroundSettings';
import Button from 'components/ui/Button';
import QRDesignSettings from './QRDesignSettings';
import QRInputSettings from './QRInputSettings';
import React from 'react';
import {connect} from 'react-redux';
import {setShowSettings} from 'redux/app/actions';

const HARDCODED_MARGIN_TOP = [140, 290];

const SettingsContent = ({selectedTab, showSettings, setShowSettings}) => {
  if (!showSettings) {
    return null;
  }
  let tabContent;
  switch (selectedTab) {
    case 'input':
      tabContent = <QRInputSettings />;
      break;
    case 'design':
      tabContent = <QRDesignSettings />;
      break;
    case 'background':
      tabContent = <AppBackgroundSettings />;
      break;
  }
  return (
    <Flex
      css={`
        animation: fadein 1s ease;
        background: ${colors.blackAlpha};
        border-top: 2px solid white;
        bottom: 0;
        overflow-x: hidden;
        overflow-y: auto;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1;
        ${keyframes.fadein};
      `}
      justifyContent="center"
      mt={HARDCODED_MARGIN_TOP}
      py={3}>
      <Box
        css={`
          position: fixed;
          right: 16px;
          top: 16px;
        `}
        mt={HARDCODED_MARGIN_TOP}>
        <Button
          label="Close"
          onClick={e => {
            setShowSettings(false);
          }}
        />
      </Box>
      {tabContent}
    </Flex>
  );
};

export default connect(
  ({app}) => ({
    selectedTab: app.selectedTab,
    showSettings: app.showSettings,
  }),
  {setShowSettings},
)(SettingsContent);
