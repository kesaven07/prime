import React from 'react';
import styled from 'styled-components';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';

const DsCard = styled.div`
  width: 19em;
  height: 20em;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgb(75 131 252 / 10%);
  position: relative;

  .image_award {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }
  .flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    min-height: 5em;
  }
`;
const Awards = ({ item }) => {
  const { imageURL, title } = item;
  return (
    <>
      <DsCard>
        <img className='image_award' src={imageURL} alt='award_photo' />
        <div className='flexCenter'>
          <Typography
            variant='h5'
            color='rgba(0,0,0,.6)'
            fontWeight='800'
            textAlign='center'
          >
            {title}
          </Typography>
        </div>
      </DsCard>
    </>
  );
};

export default Awards;
