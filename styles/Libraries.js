import { createGlobalStyle } from 'styled-components';

import * as C from './Constants';

const LibsStyle = createGlobalStyle`
  /* FLEX */
  .flex {
    display: flex !important;
    &.col {
      flex-direction: column;
    }
    &.col-r {
      flex-direction: column-reverse;
    }
    &.row {
      flex-direction: row;
    }
    &.row-r {
      flex-direction: row-reverse;
    }
    &.wrap {
      flex-wrap: wrap;
    }
    &.wrap-r {
      flex-wrap: wrap-reverse;
    }
    &.nwrap {
      flex-wrap: nowrap;
    }
    &.cont-start {
      justify-content: flex-start;
    }
    &.cont-end {
      justify-content: flex-end;
    }
    &.cont-center {
      justify-content: center;
    }
    &.cont-spbet {
      justify-content: space-between;
    }
    &.cont-sparo {
      justify-content: space-around;
    }
    &.cont-speve {
      justify-content: space-evenly;
    }
    &.align-itstart {
      align-items: flex-start;
    }
    &.align-itend {
      align-items: flex-end;
    }
    &.align-itcenter {
      align-items: center;
    }
    &.align-itstretch {
      align-items: stretch;
    }
    &.align-itbase {
      align-items: baseline;
    }
    &.align-ctstart {
      align-content: flex-start;
    }
    &.align-ctend {
      align-content: flex-end;
    }
    &.align-ctcenter {
      align-content: center;
    }
    &.align-ctstretch {
      align-content: stretch;
    }
    &.align-ctspbet {
      align-content: space-between;
    }
    &.align-ctsparo {
      align-content: space-around;
    }
    .grow {
      flex-grow: 1;
    }
    .grow-2 {
      flex-grow: 2;
    }
    .no-grow {
      flex-grow: 0;
    }
    .shrink {
      flex-shrink: 0;
    }
  }

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