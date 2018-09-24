import {Box, Flex} from 'rebass';
import {colors, keyframes} from 'styles';

import BackgroundSettings from './BackgroundSettings';
import GraffitiText from 'components/ui/GraffitiText';
import QRInput from './QRInput';
import QRSettings from './QRSettings';
import React from 'react';
import SelectBox from 'components/ui/SelectBox';
import {connect} from 'react-redux';
import {setShowSettings} from 'redux/actions';

const tabs = [
  {label: 'spray', value: 'input'},
  {label: 'pattern', value: 'qr'},
  {label: 'wall', value: 'background'},
];

class HeaderTabs extends React.PureComponent {
  state = {
    selectedTab: 'input',
  };

  render() {
    const {selectedTab} = this.state;
    const {showSettings, setShowSettings} = this.props;
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        mt={3}
        onMouseEnter={() => {
          setShowSettings(true);
        }}>
        {tabs.map(({label, value}) => (
          <Box key={value} mx={3}>
            <SelectBox
              isSelected={showSettings && selectedTab === value}
              onClick={() => {
                this.setState({selectedTab: value});
              }}>
              <GraffitiText>{label}</GraffitiText>
            </SelectBox>
          </Box>
        ))}
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
            py={4}
            width="100%"
            onMouseLeave={e => {
              if (e.clientY > e.target.getBoundingClientRect().bottom) {
                setShowSettings(false);
              }
            }}>
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
            {selectedTab === 'input' && <QRInput />}
            {selectedTab === 'qr' && <QRSettings />}
            {selectedTab === 'background' && <BackgroundSettings />}
          </Flex>
        )}
      </Flex>
    );
  }
}

const mapStateToProps = state => ({
  showSettings: state.showSettings,
});

export default connect(
  mapStateToProps,
  {setShowSettings},
)(HeaderTabs);
