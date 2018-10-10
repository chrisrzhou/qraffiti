import {Box, Flex} from 'rebass';
import {setPreview, setSelectedTab} from 'redux/app/actions';

import Background from './Background';
import Footer from './Footer';
import PermalinkButton from './PermalinkButton';
import Preview from './Preview';
import QRCodeContainer from './QRCodeContainer';
import React from 'react';
import Row from 'components/ui/Row';
import SaveButton from './SaveButton';
import Settings from './settings/Settings';
import TweetButton from './TweetButton';
import {connect} from 'react-redux';
import {hydrateState} from 'redux/qr/actions';

class App extends React.PureComponent {
  componentDidMount() {
    const qrState = new URL(this.props.location.href).searchParams.get('qr');
    if (qrState) {
      try {
        this.props.hydrateState(JSON.parse(atob(qrState)));
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
        <Settings />
        <Flex flexDirection="column" alignItems="center" mt={[160, 300]}>
          <QRCodeContainer maxSize={400} />
          <Row
            items={[
              <SaveButton />,
              <PermalinkButton location={location} />,
              <TweetButton location={location} />,
            ]}
            mt={2}
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

  _escapeKeyPress = event => {
    if (event.keyCode === 27) {
      this.props.setSelectedTab();
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
    setSelectedTab,
  },
)(App);
