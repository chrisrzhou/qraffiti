import {Box, Flex} from 'rebass';
import {colors, keyframes} from 'styles';

import BackgroundSettings from './BackgroundSettings';
import GraffitiText from 'components/ui/GraffitiText';
import QRDesignSettings from './QRDesignSettings';
import QRInputSettings from './QRInputSettings';
import React from 'react';
import Row from 'components/ui/Row';
import SelectBox from 'components/ui/SelectBox';
import {connect} from 'react-redux';
import {setShowSettings} from 'redux/actions';

const tabs = [
  {label: 'spray', value: 'input'},
  {label: 'design', value: 'design'},
  {label: 'wall', value: 'background'},
];

class HeaderTabs extends React.PureComponent {
  state = {
    selectedTab: 'input',
  };

  render() {
    const {selectedTab} = this.state;
    const {showSettings, setShowSettings} = this.props;
    let tabContent;
    switch (selectedTab) {
      case 'input':
        tabContent = <QRInputSettings />;
        break;
      case 'design':
        tabContent = <QRDesignSettings />;
        break;
      case 'background':
        tabContent = <BackgroundSettings />;
        break;
    }
    return (
      <Flex alignItems="center" justifyContent="center" mt={3}>
        <Row
          items={tabs.map(({label, value}) => (
            <SelectBox
              isSelected={showSettings && selectedTab === value}
              onClick={() => {
                this.setState({selectedTab: value});
                setShowSettings(true);
              }}>
              <GraffitiText>{label}</GraffitiText>
            </SelectBox>
          ))}
          spacing={3}
        />
        {showSettings && (
          <Flex
            css={`
              animation: dropdown 0.8s ease;
              background: ${colors.blackAlpha};
              border-top: 2px solid white;
              position: absolute;
              top: 100%;
              ${keyframes.dropdown};
              z-index: 1;
            `}
            justifyContent="center"
            onMouseLeave={e => {
              if (e.clientY > e.target.getBoundingClientRect().bottom) {
                setShowSettings(false);
              }
            }}
            py={3}
            width="100%">
            <Box
              css={`
                cursor: pointer;
                position: absolute;
                right: 8px;
                top: 16px;
              `}
              onClick={e => {
                setShowSettings(false);
              }}>
              <GraffitiText>CLOSE</GraffitiText>
            </Box>
            {tabContent}
          </Flex>
        )}
      </Flex>
    );
  }
}

export default connect(
  ({app}) => ({
    showSettings: app.showSettings,
  }),
  {setShowSettings},
)(HeaderTabs);
