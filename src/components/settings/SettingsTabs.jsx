import {Flex} from 'rebass';
import GraffitiText from 'components/ui/GraffitiText';
import React from 'react';
import Row from 'components/ui/Row';
import SelectBox from 'components/ui/SelectBox';
import {connect} from 'react-redux';
import {keyframes} from 'styles';
import {setSelectedTab} from 'redux/app/actions';

const tabs = [
  {label: 'spray', value: 'input'},
  {label: 'design', value: 'design'},
  {label: 'wall', value: 'background'},
];

const SettingsTabs = ({selectedTab, showSettings, setSelectedTab}) => (
  <Flex
    css={`
      animation: fadein 10s ease;
      ${keyframes.fadein};
    `}
    alignItems="center"
    justifyContent="center"
    mt={3}>
    <Row
      items={tabs.map(({label, value}) => (
        <SelectBox
          isSelected={showSettings && selectedTab === value}
          onClick={() => {
            setSelectedTab(value);
          }}>
          <GraffitiText>{label}</GraffitiText>
        </SelectBox>
      ))}
      spacing={3}
    />
  </Flex>
);

export default connect(
  ({app}) => ({
    selectedTab: app.selectedTab,
    showSettings: app.showSettings,
  }),
  {setSelectedTab},
)(SettingsTabs);