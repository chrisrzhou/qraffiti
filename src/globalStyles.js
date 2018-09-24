import fonts from 'fonts';
import {injectGlobal} from 'styled-components';

injectGlobal`
      @font-face {
        font-family: 'Megrim';
        src: url("${fonts.megrim}");
      }
  body {
    background: black;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 10px;
    margin: 0;
    a {
      color: white;
      text-decoration: none;
    }
  }
`;
