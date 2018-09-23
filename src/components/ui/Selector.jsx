import {Flex, Text} from 'rebass';

import GraffitiText from './GraffitiText';
import React from 'react';
import SelectBox from './SelectBox';

export default ({label, items, selectedItem, onSelectItem}) => (
  <Flex flexDirection="column" mb={3}>
    <GraffitiText>{label}</GraffitiText>
    <Flex alignItems="center" flexWrap="wrap" justifyContent="center" mt={1}>
      {items.map(item => {
        const {label, value} = item;
        return (
          <SelectBox
            key={value}
            isSelected={selectedItem === value}
            onClick={() => onSelectItem(item)}>
            <Text fontSize={10}>{label}</Text>
          </SelectBox>
        );
      })}
    </Flex>
  </Flex>
);
