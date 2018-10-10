import {Box, Flex, Text} from 'rebass';
import {colors, keyframes} from 'styles';
import {setPreview, setSelectedTab} from 'redux/app/actions';

import AppBackgroundSettings from './AppBackgroundSettings';
import CloseButton from 'components/ui/CloseButton';
import GraffitiText from 'components/ui/GraffitiText';
import Logo from 'components/ui/Logo';
import QRInputSettings from './QRInputSettings';
import QRPatternSettings from './QRPatternSettings';
import QRPresetSettings from './QRPresetSettings';
import React from 'react';
import Row from 'components/ui/Row';
import SelectBox from 'components/ui/SelectBox';
import {connect} from 'react-redux';

const tabs = ['vibe', 'message', 'pattern', 'wall'];

const Settings = ({selectedTab, setPreview, setSelectedTab}) => {
  let tabContent;
  switch (selectedTab) {
    case 'vibe':
      tabContent = <QRPresetSettings />;
      break;
    case 'message':
      tabContent = <QRInputSettings />;
      break;
    case 'pattern':
      tabContent = <QRPatternSettings />;
      break;
    case 'wall':
      tabContent = <AppBackgroundSettings />;
      break;
    default:
      tabContent = (
        <Logo
          onClick={() => {
            setPreview(true);
          }}
          pb={[2, 4]}
        />
      );
  }
  return (
    <Flex
      alignItems="center"
      bg={colors.blackAlpha}
      css={`
        animation: dropdown 1s ease-in-out;
        position: fixed;
        ${keyframes.dropdown};
      `}
      flexDirection="column"
      justifyContent="center"
      width="100%">
      <Flex
        css={`
          animation: fadein 5s ease;
          border-bottom: 2px solid ${colors.primary};
          ${keyframes.fadein};
        `}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%">
        <Text color="rgba(125, 0, 0, 1)" my={1}>
          PICK YOUR
        </Text>
        <Row
          items={tabs.map(tab => (
            <SelectBox
              isSelected={selectedTab === tab}
              onClick={() => {
                setSelectedTab(tab);
              }}>
              <GraffitiText>{tab}</GraffitiText>
            </SelectBox>
          ))}
          mb={2}
        />
      </Flex>
      <Box
        css={`
          max-height: 450px;
          overflow: auto;
          ::-webkit-scrollbar {
            height: 8px;
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            border: 1px solid ${colors.primary};
            background-color: ${colors.blackAlpha};
          }
          ::-webkit-scrollbar-thumb {
            background-color: ${colors.grayAlpha};
          }
        `}
        py={2}
        width="calc(100% - 16px)">
        {tabContent}
      </Box>
      <Box
        css={`
          position: fixed;
          right: 4px;
          top: 0;
        `}>
        {selectedTab && (
          <CloseButton
            onClick={() => {
              setSelectedTab();
            }}
          />
        )}
      </Box>
    </Flex>
  );
};

export default connect(
  ({app}) => ({
    selectedTab: app.selectedTab,
  }),
  {
    setPreview,
    setSelectedTab,
  },
)(Settings);