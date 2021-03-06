import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import { Text } from 'elements/Text';
import React from 'react';
import HeroContainer from 'elements/HeroContainer';
import Image from 'next/image';

const Container = styled('section', {
  position: 'relative',
});

const ImageContainer = styled('div', {
  position: 'absolute',
  inset: 0,
  transform: 'translateY(10rem)',
  zIndex: -1,
});

const HomeHero = ({
  title,
  description,
  button,
}: {
  title: () => React.ReactNode;
  description: string;
  button: JSX.Element;
}) => {
  return (
    <Container aria-labelledby='hero_title'>
      <ImageContainer>
        <Image
          src='/images/home_hero_bg.png'
          layout='fill'
          objectFit='cover'
          priority
          alt=''
        />
      </ImageContainer>
      <Layout>
        <HeroContainer
          css={{
            maxWidth: '620px',
            margin: '0 auto',
          }}
        >
          <Text
            id='hero_title'
            as='h1'
            type='h1'
            weight='bold'
            css={{ margin: '0 auto $5' }}
          >
            {title()}
          </Text>
          <Text
            as='p'
            type='b2'
            css={{
              maxWidth: '340px',
              margin: '0 auto $9',
              color: '$secondary200',
            }}
          >
            {description}
          </Text>
          {button}
        </HeroContainer>
      </Layout>
    </Container>
  );
};

export default HomeHero;
