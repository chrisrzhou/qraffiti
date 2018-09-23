import {Box, Flex, Text} from 'rebass';

import GraffitiText from 'components/GraffitiText';
import React from 'react';

const isSelectedCSS = `background: white; color: black;`;

export default ({label, items, selectedItem, onSelectItem}) => (
  <Flex flexDirection="column" mb={4}>
    <GraffitiText>{label}</GraffitiText>
    <Flex alignItems="center" flexWrap="wrap" justifyContent="center" mt={1}>
      {items.map(item => {
        return (
          <Box
            key={item.label}
            css={`
              ${selectedItem === item.value
                ? isSelectedCSS
                : ''} cursor: pointer;
              :hover {
                background: white;
                color: black;
              }
            `}
            p={1}
            ml={3}
            onClick={() => onSelectItem(item)}>
            <Text fontSize={10}>{item.label}</Text>
          </Box>
        );
      })}
    </Flex>
  </Flex>
);
