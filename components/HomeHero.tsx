import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import { Text } from 'elements/Text';
import React from 'react';
import HeroContainer from 'elements/HeroContainer';

const Container = styled('section', {
  backgroundImage: 'url(images/home_hero_bg.png)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '0px 100px',
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
    <Container>
      <Layout>
        <HeroContainer
          css={{
            maxWidth: '620px',
            margin: '0 auto',
          }}
        >
          <Text as='h1' type='h1' weight='bold' css={{ margin: '0 auto $5' }}>
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
