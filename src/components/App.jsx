import {Box, Flex} from 'rebass';
import {colors, keyframes} from 'styles';

import Background from './Background';
import Footer from './Footer';
import Logo from 'components/ui/Logo';
import Preview from './Preview';
import QRCode from './QRCode';
import React from 'react';
import SaveButton from './SaveButton';
import SettingsContent from 'components/settings/SettingsContent';
import SettingsTabs from 'components/settings/SettingsTabs';
import {connect} from 'react-redux';
import {setImageHref} from 'redux/qr/actions';
import {setShowSettings} from 'redux/app/actions';

class App extends React.PureComponent {
  state = {
    preview: true,
  };

  render() {
    const {qr, setImageHref} = this.props;
    const {eyeColors, eyePattern, inputString, pixelColors, pixelPattern} = qr;
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
            animation: dropdown 2s ease-in-out;
            position: relative;
            ${keyframes.dropdown};
          `}
          flexDirection="column"
          justifyContent="center"
          py={[2, 5]}>
          <Logo onClick={this._enablePreview} />
          <SettingsTabs />
          <SettingsContent />
        </Flex>
        <Flex flexDirection="column" alignItems="center" mt={[2, 4]}>
          <QRCode
            eyeColors={eyeColors}
            eyePattern={eyePattern}
            inputString={inputString}
            pixelColors={pixelColors}
            pixelPattern={pixelPattern}
            onSetImageHref={setImageHref}
          />
          <SaveButton />
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
    this.props.setShowSettings(false);
  };
}

export default connect(
  ({qr}) => ({qr}),
  {setImageHref, setShowSettings},
)(App);
