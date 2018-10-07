import {Box, Flex} from 'rebass';
import {colors, keyframes} from 'styles';

import Background from './Background';
import Footer from './Footer';
import Logo from 'components/ui/Logo';
import Preview from './Preview';
import QRCode from './QRCode';
import React from 'react';
import SettingsTabs from 'components/settings/SettingsTabs';
import {connect} from 'react-redux';

class App extends React.PureComponent {
  state = {
    preview: true,
  };

  render() {
    const {
      eyeColors,
      eyePattern,
      inputString,
      pixelColors,
      pixelPattern,
    } = this.props.qr;
    const content = this.state.preview ? (
      <Preview
        onExitPreview={() => {
          this.setState({preview: false});
        }}
      />
    ) : (
      <>
        <Flex
          alignItems="center"
          bg={colors.blackAlpha}
          css={`
            animation: dropdown 3s ease-in-out;
            position: relative;
            ${keyframes.dropdown};
          `}
          flexDirection="column"
          justifyContent="center"
          py={[2, 5]}>
          <Logo onClick={this._enablePreview} />
          <SettingsTabs />
        </Flex>
        <Flex justifyContent="center" mt={[2, 4]}>
          <QRCode
            eyeColors={eyeColors}
            eyePattern={eyePattern}
            inputString={inputString}
            pixelColors={pixelColors}
            pixelPattern={pixelPattern}
          />
        </Flex>
      </>
    );
    return (
      <Box
        css={`
          overflow: hidden;
        `}>
        <Background />
        {content}
        <Footer />
      </Box>
    );
  }

  _enablePreview = () => {
    this.setState({preview: true});
  };
}

export default connect(({qr}) => ({qr}))(App);
