import fonts from 'fonts';
import {injectGlobal} from 'styled-components';

injectGlobal`
  @font-face {
    font-family: "Bomb Font";
    src: url("${fonts.BombFontTTF}");
  }
  @font-face {
    font-family: "Most Wasted";
    src: url("${fonts.MostWastedTTF}");
  }
  @font-face {
    font-family: "Painterz";
    src: url("${fonts.PainterzTTF}");
  }
  @font-face {
    font-family: "Wild Style";
    src: url("${fonts.WildStyleTTF}");
  }

  body {
    background: black;
    color: white;
    font-family: 'Most Wasted', sans-serif;
    font-size: 24px;
    margin: 0;
  }
`;
