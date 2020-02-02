import { createGlobalStyle } from 'styled-components';

import * as C from './Constants';

const LibsStyle = createGlobalStyle`
  /*** FONTS SIZES em
  /*********************/
  .fn-s18px{
    font-size: 1.125rem;
  }

  /*** FONTS
  /*********************/
  .has-text-centered {
    text-align: center;
  }
  .tx-justify {
    text-align: justify;
  }
  .tx-right{
    text-align: right;
  }
  .tx-up {
    text-transform: uppercase;
  }
  .tx-du {
    text-decoration: underline;
  }
  .tx-dl {
    text-decoration: line-through;
  }
  .fn-wnb {
    font-weight: normal;
  }
  .fn-wb {
    font-weight: bold;
  }

  /* BACKGROUND COLORS */
  .bg-blue{
    background: ${ C.BLUE };
  }
  .bg-yellow{
    background: ${ C.YELLOW };
  }
  .bg-pink{
    background: ${ C.PINK };
  }
  .bg-darkgrey{
    background: ${ C.DARK_GREY };
  }
  .bg-orange{
    background: ${ C.ORANGE };
  }
  .bg-green{
    background: ${ C.GREEN };
  }

  /* TEXT COLORS */
  .tx-blue{
    color: ${ C.BLUE };
  }
  .tx-yellow{
    color: ${ C.YELLOW };
  }
  .tx-pink{
    color: ${ C.PINK };
  }
  .tx-darkgrey{
    color: ${ C.DARK_GREY };
  }
  .tx-orange{
    color: ${ C.ORANGE };
  }
  .tx-green{
    color: ${ C.GREEN }
  }

  
`;

export default LibsStyle;