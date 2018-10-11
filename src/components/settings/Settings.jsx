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

const tabs = ['vibe', 'pattern', 'message', 'wall'];

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
      bg={colors.blackAlpha}
      alignItems="center"
      css={`
        animation: dropdown 1s ease-in-out, fadein 3s ease;
        position: fixed;
        ${keyframes.dropdown};
        ${keyframes.fadein};
      `}
      flexDirection="column"
      justifyContent="center"
      width="100%">
      <Flex
        css={`
          border-bottom: 2px solid ${colors.primary};
        `}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%">
        <Text color="rgba(150, 0, 0, 1)" my={1}>
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
      {selectedTab && (
        <>
          <Box
            css={`
              bottom: 0;
              left: 0;
              position: fixed;
              right: 0;
              top: 0;
              z-index: -1;
            `}
            onClick={() => {
              setSelectedTab();
            }}
          />
          <Box
            css={`
              position: fixed;
              right: 4px;
              top: 0;
            `}>
            <CloseButton
              onClick={() => {
                setSelectedTab();
              }}
            />
          </Box>
        </>
      )}
      <Box
        css={`
          max-height: 450px;
          overflow: scroll;
          -webkit-overflow-scrolling: touch;

          ::-webkit-scrollbar {
            height: 8px;
            width: 8px;
          }
          ::-webkit-scrollbar-thumb {
            background-color: ${colors.grayAlpha};
          }
          ::-webkit-scrollbar-corner {
            background-color: rgba(0, 0, 0, 0);
          }
        `}
        p={3}
        width="100%">
        {tabContent}
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
