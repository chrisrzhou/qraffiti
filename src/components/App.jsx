import {colors, keyframes} from 'styles';

import Background from './Background';
import {Flex} from 'rebass';
import Footer from './Footer';
import HeaderTabs from 'components/header/HeaderTabs';
import Logo from 'components/ui/Logo';
import Preview from './Preview';
import QRCode from './QRCode';
import React from 'react';
import {connect} from 'react-redux';
import {setPlayMusic} from 'redux/actions';

class App extends React.PureComponent {
  state = {
    preview: true,
  };

  render() {
    const {inputString} = this.props;
    const content = this.state.preview ? (
      <Preview
        onExitPreview={() => {
          this.setState({preview: false});
          this.props.setPlayMusic(true);
        }}
      />
    ) : (
      <>
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
          py={[2, 5]}>
          <Logo onClick={this._enablePreview} />
          <HeaderTabs />
        </Flex>
        <Flex justifyContent="center" mt={[2, 4]}>
          <QRCode renderer="base" inputString={inputString} />
        </Flex>
      </>
    );
    return (
      <div>
        <Background />
        {content}
        <Footer />
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
  {setPlayMusic},
)(App);
