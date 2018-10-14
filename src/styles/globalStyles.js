import MegrimTTF from 'assets/fonts/Megrim.ttf';
import {colors} from 'styles';
import {injectGlobal} from 'styled-components';

injectGlobal`
  @font-face {
    font-family: Megrim;
    src: url("${MegrimTTF}");
  }
  body {
    background: ${colors.black};
    color: ${colors.primary};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 10px;
    margin: 0;

    a {
      color: ${colors.primary};
    }
    * {
      box-sizing: border-box;
    }
  }
`;
