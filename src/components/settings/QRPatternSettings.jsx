import {Box, Flex} from 'rebass';

import QRBackgroundSettings from './patterns/QRBackgroundSettings';
import QRLogoSettings from './patterns/QRLogoSettings';
import QRPixelSettings from './patterns/QRPixelSettings';
import React from 'react';
import Selector from 'components/ui/Selector';

const TABS = [
  {label: 'Body', value: 'body'},
  {label: 'Eyes', value: 'eyes'},
  {label: 'Logo', value: 'logo'},
  {label: 'Background', value: 'background'},
];

export default class extends React.PureComponent {
  state = {
    selectedTab: 'body',
  };

  render() {
    const {selectedTab} = this.state;
    let content;
    switch (selectedTab) {
      case 'body':
        content = <QRPixelSettings type="body" />;
        break;
      case 'eyes':
        content = <QRPixelSettings type="eyes" />;
        break;
      case 'background':
        content = <QRBackgroundSettings />;
        break;
      case 'logo':
        content = <QRLogoSettings />;
        break;
    }
    return (
      <Flex flexDirection={['column', 'row']} justifyContent="center">
        <Selector
          items={TABS}
          mb={[3, 0]}
          mr={[0, 5]}
          selectedItem={selectedTab}
          onSelectItem={this._onSelectTab}
        />
        <Box width={['100%', '40%']}>{content}</Box>
      </Flex>
    );
  }

  _onSelectTab = item => {
    this.setState({selectedTab: item.value});
  };
}
