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

class Settings extends React.PureComponent {
  componentDidMount() {
    document.addEventListener('mousedown', this._handleClickOutside, false);
    window.addEventListener('keydown', this._escapeKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this._handleClickOutside, false);
    window.removeEventListener('keydown', this._escapeKeyPress, false);
  }

  render() {
    const {selectedTab, setPreview, setSelectedTab} = this.props;
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
    }
    return (
      <div
        style={{left: 0, position: 'fixed', top: 0}}
        ref={ref => {
          this._ref = ref;
        }}>
        <Flex
          alignItems="center"
          bg={colors.blackAlpha}
          css={`
            animation: dropdown 1s ease-in-out, fadein 3s ease;
            position: fixed;
            z-index: 1;
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
          {selectedTab ? (
            <>
              <Box
                css={`
                  position: fixed;
                  right: 4px;
                  top: 0;
                `}>
                <CloseButton onClick={this._closeSettings} />
              </Box>
              <Box
                css={`
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

                  @media only screen and (max-device-width: 480px) {
                    height: calc(100vh - 56px);
                  }
                `}
                p={3}
                width="100%">
                {tabContent}
              </Box>
            </>
          ) : (
            <Logo
              onClick={() => {
                setPreview(true);
              }}
              pb={[2, 4]}
            />
          )}
        </Flex>
      </div>
    );
  }

  _closeSettings = () => {
    this.props.setSelectedTab();
  };

  _escapeKeyPress = event => {
    if (event.keyCode === 27) {
      this._closeSettings();
    }
  };

  _handleClickOutside = e => {
    if (this._ref && !this._ref.contains(e.target)) {
      this._closeSettings();
    }
  };
}

export default connect(
  ({app}) => ({
    selectedTab: app.selectedTab,
  }),
  {
    setPreview,
    setSelectedTab,
  },
)(Settings);
