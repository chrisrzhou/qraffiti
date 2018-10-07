import {Box, Flex} from 'rebass';

import React from 'react';

const Row = ({items, spacing, ...otherProps}) => (
  <Flex alignItems="center" {...otherProps}>
    {items.map((item, i) => (
      <Box key={i} mx={spacing}>
        {item}
      </Box>
    ))}
  </Flex>
);

Row.defaultProps = {
  spacing: 2,
};

export default Row;
