import {Box, Flex} from 'rebass';

import React from 'react';

const Row = ({items, spacing, ...otherProps}) => (
  <Flex alignItems="center" {...otherProps}>
    {items.map((item, i) => (
      <Box mx={spacing} key={i}>
        {item}
      </Box>
    ))}
  </Flex>
);

Row.defaultProps = {
  spacing: 2,
};

export default Row;
