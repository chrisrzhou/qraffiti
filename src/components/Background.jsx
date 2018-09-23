import {Flex} from 'rebass';
import React from 'react';

export default function({background, backgroundImage}) {
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      css={`
        background: ${background};
        background-image: url(${backgroundImage});
        background-size: cover;
        animation: fadein 4s;

        @keyframes fadein {
          from {
            opacity: 0.1;
          }
          to {
            opacity: 1;
          }
        }
      `}
    />
  );
}
