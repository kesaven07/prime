import { Text } from 'elements/Text';
import { styled } from 'stitches.config';
import { Button } from './Button';
import Layout from '../elements/Layout';
import RightArrow from 'public/images/icons/right_arrow.svg';
import Flex from 'elements/Flex';
import Image from 'next/image';
import about from 'data/about';

const Container = styled('section');

const InnerContainer = styled('div', {
  margin: '0 auto 40px',
  padding: '192px 0 0',
  textAlign: 'center',

  '@bp2': {
    margin: '0 0 60px',
    padding: '274px 0 0',
    textAlign: 'left',
  },
});

const ImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '368px',
});

const InitiativesHero = ({ title, imagePath }) => {
  return (
    <Container aria-labelledby='hero_title'>
      <Layout>
        <InnerContainer>
          <Flex gap='$12' spaceBetweenCenter>
            <header>
              <Text id='hero_title' as='h1' type='h1' weight='bold' css={{ margin: '0 0 $9' }}>
                {title}
              </Text>
              <Button
                href={about.careers.path}
                border
                color='$accentb500'
                text='Join Us'
                icon={RightArrow}
              />
            </header>
            <ImageContainer css={{ '@bp7': { display: 'none' } }}>
              <object
                  type='image/svg+xml'
                  className='image'
                  data={imagePath}
                  style={{
                    width: '500px',
                    height: '300px',
                    objectFit: 'contain',
                  }}
              ></object>
            </ImageContainer>
          </Flex>
        </InnerContainer>
      </Layout>
    </Container>
  );
};

export default InitiativesHero;
