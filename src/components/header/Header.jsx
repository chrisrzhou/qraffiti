import AppSettings from './AppSettings';
import {Flex} from 'rebass';
import GraffitiText from 'components/ui/GraffitiText';
import QRInput from './QRInput';
import QRSettings from './QRSettings';
import React from 'react';
import SelectBox from 'components/ui/SelectBox';

const tabs = [
  {label: 'spray', value: 'input'},
  {label: 'pattern', value: 'qr'},
  {label: 'zone', value: 'app'},
];

export default class Header extends React.PureComponent {
  state = {
    tab: 'input',
  };

  render() {
    const {tab} = this.state;
    return (
      <Flex
        bg="rgba(0, 0, 0, 0.7)"
        flexDirection="column"
        justifyContent="center"
        p={3}>
        <GraffitiText fontSize={[70, 100]}>qraffiti</GraffitiText>
        <Flex
          css={`
            border-bottom: 2px solid white;
          `}
          alignItems="center"
          justifyContent="center"
          py={3}
          mb={3}>
          {tabs.map(({label, value}) => (
            <SelectBox
              key={value}
              isSelected={tab === value}
              onClick={() => {
                this.setState({tab: value});
              }}>
              <GraffitiText>{label}</GraffitiText>
            </SelectBox>
          ))}
        </Flex>
        {tab === 'input' && <QRInput />}
        {tab === 'qr' && <QRSettings />}
        {tab === 'app' && <AppSettings />}
      </Flex>
    );
  }
}
