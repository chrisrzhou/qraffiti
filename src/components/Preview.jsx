import 'globalStyles';

import {Box, Flex} from 'rebass';
import {colors, keyframes} from 'styles';

import GraffitiText from 'components/ui/GraffitiText';
import Logo from 'components/ui/Logo';
import React from 'react';
import {connect} from 'react-redux';
import {setRandomBackgroundImage} from 'redux/actions';

class Preview extends React.PureComponent {
  componentDidMount() {
    const {setRandomBackgroundImage} = this.props;
    this.backgroundInterval = setInterval(setRandomBackgroundImage, 6000);
  }

  componentWillUnmount() {
    if (this.backgroundInterval) {
      clearInterval(this.backgroundInterval);
    }
  }

  render() {
    const {onExitPreview} = this.props;
    return (
      <Flex
        css={`
          animation: fadein 3s ease-in-out;
          height: 100vh;
          width: 100vw;
          ${keyframes.fadein};
        `}
        flexDirection="column"
        alignItems="center"
        justifyContent="center">
        <Box bg={colors.blackAlpha} p={5} width="100%">
          <Logo />
          <Box
            css={`
              cursor: pointer;
              :hover {
                color: ${colors.secondary};
              }
            `}
            mt={3}
            onClick={onExitPreview}>
            <GraffitiText>Spray it</GraffitiText>
          </Box>
        </Box>
      </Flex>
    );
  }
}

const mapStateToProps = state => ({
  inputString: state.inputString,
});

export default connect(
  mapStateToProps,
  {setRandomBackgroundImage},
)(Preview);
