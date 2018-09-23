import fonts from 'fonts';
import {injectGlobal} from 'styled-components';

const fontFaces = fonts
  .map(font => {
    return `
      @font-face {
        font-family: '${font.label}';
        src: url("${font.url}");
      }
    `;
  })
  .join(' ');

injectGlobal`
  ${fontFaces}
  body {
    background: black;
    color: white;
    font-family: 'Most Wasted', sans-serif;
    font-size: 24px;
    margin: 0;
  }
`;
