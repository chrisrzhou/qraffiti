import {Box, Flex} from 'rebass';

import GraffitiText from 'components/ui/GraffitiText';
import HeaderTabs from './HeaderTabs';
import {Link} from 'gatsby';
import React from 'react';

export default class Header extends React.PureComponent {
  state = {
    viewApp: false,
  };

  render() {
    const {viewApp} = this.state;
    return (
      <Flex
        css={`
          height: ${!viewApp ? '100vh' : 'auto'};
          position: relative;
        `}
        bg="rgba(0, 0, 0, 0.7)"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        py={3}>
        <Link
          to={'/'}
          onClick={() => {
            this.setState({viewApp: false});
          }}>
          <GraffitiText fontSize={[70, 100]}>
            <span style={{color: 'red'}}>qr</span>
            affiti
          </GraffitiText>
        </Link>
        {viewApp ? (
          <HeaderTabs />
        ) : (
          <Box
            css={`
              cursor: pointer;
              :hover {
                color: red;
              }
            `}
            mt={3}
            onClick={() => {
              this.setState({viewApp: true});
            }}>
            <GraffitiText>Start</GraffitiText>
          </Box>
        )}
      </Flex>
    );
  }
}
