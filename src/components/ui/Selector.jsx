import {Flex} from 'rebass';
import GraffitiText from './GraffitiText';
import React from 'react';
import SelectBox from './SelectBox';

export default ({items, selectedItem, onSelectItem}) => (
  <Flex flexDirection="column" mb={[4, 0]}>
    {items.map(item => {
      const {label, value} = item;
      return (
        <SelectBox
          key={value}
          isSelected={selectedItem === value}
          onClick={() => onSelectItem(item)}>
          <GraffitiText>{label}</GraffitiText>
        </SelectBox>
      );
    })}
  </Flex>
);
