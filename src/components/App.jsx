import {Box, Flex} from 'rebass';
import {colors, keyframes} from 'styles';
import {hydrateState, setImageHref} from 'redux/qr/actions';
import {setPreview, setShowSettings} from 'redux/app/actions';

import Background from './Background';
import Footer from './Footer';
import Logo from 'components/ui/Logo';
import PermalinkButton from './PermalinkButton';
import Preview from './Preview';
import QRCode from './QRCode';
import React from 'react';
import Row from 'components/ui/Row';
import SaveButton from './SaveButton';
import SettingsContent from 'components/settings/SettingsContent';
import SettingsTabs from 'components/settings/SettingsTabs';
import TweetButton from './TweetButton';
import {connect} from 'react-redux';

class App extends React.PureComponent {
  componentDidMount() {
    const qrState = new URL(this.props.location.href).searchParams.get('qr');
    if (qrState) {
      try {
        this.props.hydrateState(JSON.parse(atob(qrState)));
        this.setState({isHydrated: true});
      } catch {}
    }
  }

  render() {
    const {isPreview, location, qr, setImageHref, setPreview} = this.props;
    const {eyeColors, eyePattern, inputString, pixelColors, pixelPattern} = qr;
    const content = isPreview ? (
      <Preview
        onExitPreview={() => {
          setPreview(false);
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
          <Row
            items={[
              <SaveButton />,
              <PermalinkButton location={location} />,
              <TweetButton location={location} />,
            ]}
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
    this.props.setPreview(true);
    this.props.setShowSettings(false);
  };
}

export default connect(
  ({app, qr}) => ({
    isPreview: app.isPreview,
    qr,
  }),
  {
    hydrateState,
    setImageHref,
    setPreview,
    setShowSettings,
  },
)(App);
