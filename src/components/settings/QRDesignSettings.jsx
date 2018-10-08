import {Flex} from 'rebass';
import QRBackgroundSettings from './qr-design/QRBackgroundSettings';
import QRLogoSettings from './qr-design/QRLogoSettings';
import QRPixelSettings from './qr-design/QRPixelSettings';
import React from 'react';
import Selector from 'components/ui/Selector';
import {settingsContentWidth} from 'styles';

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
      <Flex flexDirection={['column', 'row']}>
        <Selector
          items={TABS}
          mb={[4, 0]}
          mr={[0, 4]}
          selectedItem={selectedTab}
          onSelectItem={this._onSelectTab}
        />
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
