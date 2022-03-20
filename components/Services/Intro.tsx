import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import ResponsiveFlex from 'elements/ResponsiveFlex';
import Image from 'next/image';
import { Text } from 'elements/Text';
import Benefits from './Benefits';
import services from 'data/services';

const Container = styled(SectionContainer, {});

const ImageContainer = styled('div', {
  position: 'relative',
  flex: 0.8,
  textAlign: 'center',
});

const StyledObject = styled('object', {
  width: '500px',
  height: '300px',
  objectFit: 'contain',

  '@bp8': {
    width: '100%',
  },
});

const Intro = ({ text, imagePath, benefits }) => {
  return (
    <Container>
      <Layout>
        <ResponsiveFlex gapY='$9'>
          <Text
            as='p'
            type='h6'
            css={{ flex: 1, '@bp8': { order: 2, textAlign: 'center' } }}
          >
            {text}
          </Text>
          <ImageContainer>
            <StyledObject
              type='image/svg+xml'
              className='image'
              data={imagePath}
            ></StyledObject>
          </ImageContainer>
        </ResponsiveFlex>
        <Benefits benefits={benefits} />
      </Layout>
    </Container>
  );
};

export default Intro;
