import {Flex} from 'rebass';
import React from 'react';

export default function({settings}) {
  const {
    backgroundColors,
    canvasSize,
    foregroundColors,
    errorCorrectionLevel,
  } = settings;
  return (
    <Flex flexDirection="column">
      <div>backgroundColors</div>
      <input type="text" value={backgroundColors[0]} />
      <div>errorCorrectionLevel</div>
      <input type="text" value={errorCorrectionLevel} />
      <div>Size</div>
      <input type="number" value={canvasSize} />
    </Flex>
  );
}
