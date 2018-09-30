import {Flex} from 'rebass';
import QRColorSettings from './QRColorSettings';
import QRPatternSettings from './QRPatternSettings';
import React from 'react';
import Selector from 'components/ui/Selector';

const TABS = [
  {label: 'Patterns', value: 'pixels'},
  {label: 'Eyes', value: 'eyes'},
  {label: 'Colors', value: 'colors'},
  {label: 'Logo', value: 'logo'},
];

export default class extends React.PureComponent {
  state = {
    selectedTab: 'pixels',
  };

  render() {
    const {selectedTab} = this.state;
    let content;
    switch (selectedTab) {
      case 'colors':
        content = <QRColorSettings />;
        break;
      case 'pixels':
        content = <QRPatternSettings type="pixels" />;
        break;
      case 'eyes':
        content = <QRPatternSettings type="eyes" />;
        break;
      default:
        content = <div>adfadf</div>;
    }
    return (
      <Flex flexDirection={['column', 'row']}>
        <Selector
          items={TABS}
          selectedItem={selectedTab}
          onSelectItem={this._onSelectTab}
        />
        <Flex justifyContent="center" width={250}>
          {content}
        </Flex>
      </Flex>
    );
  }

  _onSelectTab = item => {
    this.setState({selectedTab: item.value});
  };
}
