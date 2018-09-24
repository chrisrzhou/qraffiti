import {Box, Flex} from 'rebass';
import {colors, keyframes} from 'styles';

import Background from './Background';
import HeaderTabs from 'components/header/HeaderTabs';
import Logo from 'components/ui/Logo';
import Preview from './Preview';
import QRCode from './QRCode';
import React from 'react';
import {connect} from 'react-redux';
import music from 'music/adorable.wav';
import {setRandomBackgroundImage} from 'redux/actions';

class App extends React.PureComponent {
  state = {
    preview: true,
  };

  componentDidMount() {
    const {setRandomBackgroundImage} = this.props;
    this.backgroundInterval = setInterval(setRandomBackgroundImage, 10000);
  }

  componentWillUnmount() {
    if (this.backgroundInterval) {
      clearInterval(this.backgroundInterval);
    }
  }

  render() {
    const {inputString} = this.props;
    const content = this.state.preview ? (
      <Preview onExitPreview={() => this.setState({preview: false})} />
    ) : (
      <Flex flexDirection="column" mt={[2, 5]}>
        <Flex
          css={`
            animation: dropdown 3s ease-in-out;
            position: relative;
            ${keyframes.dropdown};
          `}
          bg={colors.blackAlpha}
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          py={3}>
          <Logo onClick={this._enablePreview} />
          <HeaderTabs />
        </Flex>
        <Flex
          css={`
            animation: fadein 5s ease-in-out;
            ${keyframes.fadein};
          `}
          justifyContent="center">
          <QRCode renderer="base" inputString={inputString} />
        </Flex>
      </Flex>
    );
    return (
      <div>
        <Background />
        {content}
        <audio id="music" loop src={music} autoPlay />
      </div>
    );
  }

  _enablePreview = () => {
    this.setState({preview: true});
  };
}

const mapStateToProps = state => ({
  inputString: state.inputString,
});

export default connect(
  mapStateToProps,
  {setRandomBackgroundImage},
)(App);
