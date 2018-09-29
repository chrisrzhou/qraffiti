import {Box, Flex} from 'rebass';
import {colors, keyframes} from 'styles';

import BackgroundSettings from './BackgroundSettings';
import GraffitiText from 'components/ui/GraffitiText';
import QRInput from './QRInput';
import QRSettings from './QRSettings';
import React from 'react';
import Row from 'components/ui/Row';
import SelectBox from 'components/ui/SelectBox';
import {connect} from 'react-redux';
import {setShowSettings} from 'redux/actions';

const tabs = [
  {label: 'spray', value: 'input'},
  {label: 'design', value: 'qr'},
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
            pb={5}
            pt={3}
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
