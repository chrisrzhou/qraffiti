import {Box, Flex} from 'rebass';
import {colors, keyframes} from 'styles';
import {setPreview, setShowSettings} from 'redux/app/actions';

import Background from './Background';
import Footer from './Footer';
import Logo from 'components/ui/Logo';
import PermalinkButton from './PermalinkButton';
import Preview from './Preview';
import QRCodeContainer from './QRCodeContainer';
import React from 'react';
import Row from 'components/ui/Row';
import SettingsContent from 'components/settings/SettingsContent';
import SettingsTabs from 'components/settings/SettingsTabs';
import TweetButton from './TweetButton';
import {connect} from 'react-redux';
import {hydrateState} from 'redux/qr/actions';

class App extends React.PureComponent {
  componentDidMount() {
    const qrState = new URL(this.props.location.href).searchParams.get('qr');
    if (qrState) {
      try {
        this.props.hydrateState(JSON.parse(atob(qrState)));
        this.setState({isHydrated: true});
      } catch {
        console.error(
          'Failed to load provided qr code, defaulting to base configuration',
        );
      }
    }
    window.addEventListener('keydown', this._escapeKeyPress, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this._escapeKeyPress, false);
  }

  render() {
    const {isPreview, location, setPreview} = this.props;
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
            animation: dropdown 1s ease-in-out;
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
          <QRCodeContainer maxSize={400} />
          <Row
            items={[
              <PermalinkButton location={location} />,
              <TweetButton location={location} />,
            ]}
            mt={3}
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

  _escapeKeyPress = event => {
    if (event.keyCode === 27) {
      this.props.setShowSettings(false);
    }
  };
}

export default connect(
  ({app}) => ({
    isPreview: app.isPreview,
  }),
  {
    hydrateState,
    setPreview,
    setShowSettings,
  },
)(App);
