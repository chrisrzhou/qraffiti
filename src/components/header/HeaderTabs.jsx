import {Box, Flex} from 'rebass';

import BackgroundSettings from './BackgroundSettings';
import GraffitiText from 'components/ui/GraffitiText';
import QRInput from './QRInput';
import QRSettings from './QRSettings';
import React from 'react';
import SelectBox from 'components/ui/SelectBox';
import {connect} from 'react-redux';
import {setShowSettings} from 'redux/actions';

const headerBackground = 'rgba(0, 0, 0, 0.7)';

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
        css={`
          opacity: 0.3;
          :hover {
            opacity: 1;
          }
        `}
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
              background: ${headerBackground};
              border-top: 2px solid white;
              position: absolute;
              top: 100%;

              @keyframes dropdown {
                0% {
                  transform: translateY(-100%);
                  opacity: 0;
                }
                50% {
                  transform: translateY(0);
                }
                100% {
                  background: ${headerBackground};
                  opacity: 1;
                }
              }
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
                top: 8px;
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
