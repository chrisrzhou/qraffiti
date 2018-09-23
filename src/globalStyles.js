import fonts from 'fonts';
import {injectGlobal} from 'styled-components';

const fontFaces = fonts
  .map(font => {
    return `
      @font-face {
        font-family: '${font.label}';
        src: url("${font.ttf}");
      }
    `;
  })
  .join(' ');

injectGlobal`
  ${fontFaces}
  body {
    background: black;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 24px;
    margin: 0;
  }
`;
