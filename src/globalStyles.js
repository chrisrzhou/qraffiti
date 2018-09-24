import {colors} from 'styles';
import fonts from 'fonts';
import {injectGlobal} from 'styled-components';

injectGlobal`
  @font-face {
    font-family: 'Megrim';
    src: url("${fonts.megrim}");
  }
  body {
    background: ${colors.black};
    color: ${colors.primary};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 10px;
    margin: 0;
    a {
      color: ${colors.primary};
      text-decoration: none;
    }
  }
`;
