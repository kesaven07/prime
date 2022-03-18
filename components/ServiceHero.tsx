import { Text } from 'elements/Text';
import { styled } from 'stitches.config';
import { Button } from './Button';
import Layout from '../elements/Layout';
import RightArrow from 'public/images/icons/right_arrow.svg';
import pages from 'data/pages';
import Flex from 'elements/Flex';
import HeroContainer from 'elements/HeroContainer';
import Image from 'next/image';

const Container = styled('section', {
  position: 'relative',
});

const InnerContainer = styled(HeroContainer, {
  maxWidth: '592px',
  margin: '0 auto',

  '@bp2': {
    margin: '0 0 60px',
    textAlign: 'left',
  },
});

const StyledBackgroundImage = styled('span', {
  position: 'absolute',
  inset: 0,
  zIndex: -1,

  '&::before': {
    content: '',
    position: 'absolute',
    inset: 0,
    backgroundImage:
      'linear-gradient(90deg, $primary900_85 0%, $primary900_70 85%, $primary900_85 100%)',
    zIndex: 1,
  },

  '@bp2': {
    '&::before': {
      backgroundImage:
        'linear-gradient(90deg, $primary900 0%, $primary900_95 50%, $primary900_35 100%)',
    },
  },
});

const ServiceHero = ({ title, description, imagePath }) => {
  return (
    <Container>
      <StyledBackgroundImage>
        <Image src={imagePath} objectFit='cover' layout='fill' priority alt=''/>
      </StyledBackgroundImage>
      <Layout>
        <InnerContainer>
          <Text
            as='p'
            type='b5'
            caps
            wide
            css={{ color: '$secondary200', marginBottom: '$2' }}
          >
            Services /
          </Text>
          <Text as='h1' type='h1' weight='bold' css={{ margin: '0 0 $5' }}>
            {title}
          </Text>
          <Text
            as='p'
            type='b2'
            css={{
              margin: '0 0 $9',
              color: '$secondary200',
            }}
          >
            {description}
          </Text>
          <Flex
            gap='$4'
            css={{
              flexDirection: 'column',
              '@bp1': { flexDirection: 'row' },
              '@bp7': { margin: '0 auto', width: 'fit-content' },
            }}
          >
            <Button
              href={pages.contact.path}
              border
              color='$secondary100'
              text='Get in touch'
              icon={RightArrow}
            />
            {/* <Button
              color='$secondary200'
              href='/cs'
              text='Learn More'
              css={{ '@bp7': { margin: '0 auto' } }}
            /> */}
          </Flex>
        </InnerContainer>
      </Layout>
    </Container>
  );
};

export default ServiceHero;
