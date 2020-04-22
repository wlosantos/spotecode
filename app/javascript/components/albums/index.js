import React, { Fragment, useState, useEffect } from 'react';
import { Heading, Columns, Image } from 'react-bulma-components';
import styled from 'styled-components';

const DivSpaced = styled.div `
  margin-top: 20px;
  margin-bottom: 20px;
`

const Albums = () => {
  return(
    <Fragment>

      <Columns className='is-vcentered is-mobile is-centered'>
        <Columns.Column desktop={{size: 3}} className='has-text-centered'>
          <Image src='' />
          <DivSpaced>
            <Heading size={5} className='has-text-white'>Título</Heading>
            <Heading size={6} subtitle className='has-text-white'>Subtitulo</Heading>
          </DivSpaced>
        </Columns.Column>
      </Columns>

    </Fragment>
  );
}

export default Albums;
