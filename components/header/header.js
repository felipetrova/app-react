import React from 'react';

import * as Style from './style';
import * as GridStyle from '../../styles/Grid';
import { ArrowLeft } from '../../styles/Icons';

export default function header({title}) {
  return (
    <>
    <Style.Header className='bg-yellow'>
        <GridStyle.Row>
          <GridStyle.Col className='flex align-itcenter no-margin' mobile={ 2 } tablet={ 3 }>
            <ArrowLeft className='tx-blue fn-wb' />
          </GridStyle.Col>
          <GridStyle.Col className='flex align-itcenter cont-center no-margin' mobile={ 8 } tablet={ 3 }>
            <p className='fn-s18px fn-wb tx-blue'>{title}</p>
          </GridStyle.Col>
          <GridStyle.Col className='flex align-itcenter no-margin' mobile={ 2 } tablet={ 3 }>
          </GridStyle.Col>
        </GridStyle.Row>
    </Style.Header>
    </>
  );
}
