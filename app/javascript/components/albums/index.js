import React, { Fragment, useState, useEffect } from 'react';
import { Heading, Columns, Image } from 'react-bulma-components';
import styled from 'styled-components';
import AlbumsService from '../../services/albums';
import { useParams } from 'react-router-dom';

const DivSpaced = styled.div `
  margin-top: 20px;
  margin-bottom: 20px;
`

const Albums = () => {

  const [album, setAlbum] = useState({});
  let  { id } = useParams();

  async function fetchAlbum() {
    const response = await AlbumsService.show(id);
    setAlbum(response.data)
 }

  useEffect(() => {
    fetchAlbum();
  }, []);

  return(
    <Fragment>

      <Columns className='is-vcentered is-mobile is-centered'>
        <Columns.Column desktop={{size: 3}} className='has-text-centered'>
          <Image src={album.cover_url} />
          <DivSpaced>
            <Heading size={5} className='has-text-white'>{album.title}</Heading>
            <Heading size={6} subtitle className='has-text-white'>{album.artist_name}</Heading>
          </DivSpaced>
        </Columns.Column>
      </Columns>

    </Fragment>
  );
}

export default Albums;