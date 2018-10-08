import {Box, Flex} from 'rebass';

import QRLogoSettings from './QRLogoSettings';
import QRPixelSettings from './QRPixelSettings';
import React from 'react';
import Selector from 'components/ui/Selector';
import {settingsContentWidth} from 'styles';

const TABS = [
  {label: 'Body', value: 'body'},
  {label: 'Eyes', value: 'eyes'},
  {label: 'Logo', value: 'logo'},
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
      case 'logo':
        content = <QRLogoSettings />;
        break;
      default:
        content = <div>adfadf</div>;
    }
    return (
      <Flex flexDirection={['column', 'row']}>
        <Box mr={[0, 4]}>
          <Selector
            items={TABS}
            selectedItem={selectedTab}
            onSelectItem={this._onSelectTab}
          />
        </Box>
        <Flex justifyContent="center" width={settingsContentWidth}>
          {content}
        </Flex>
      </Flex>
    );
  }

  _onSelectTab = item => {
    this.setState({selectedTab: item.value});
  };
}
