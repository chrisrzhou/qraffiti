import {Flex} from 'rebass';
import QRColorSettings from './QRColorSettings';
import QRPatternSettings from './QRPatternSettings';
import React from 'react';
import Selector from 'components/ui/Selector';

const TABS = [
  {label: 'Patterns', value: 'patterns'},
  {label: 'Colors', value: 'colors'},
  {label: 'Logo', value: 'logo'},
];

export default class extends React.PureComponent {
  state = {
    selectedTab: 'colors',
  };

  render() {
    const {selectedTab} = this.state;
    let content;
    switch (selectedTab) {
      case 'colors':
        content = <QRColorSettings />;
        break;
      case 'patterns':
        content = <QRPatternSettings />;
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
        <Flex justifyContent="center" ml={[0, 3]} mt={1} width={250}>
          {content}
        </Flex>
      </Flex>
    );
  }

  _onSelectTab = item => {
    this.setState({selectedTab: item.value});
  };
}
