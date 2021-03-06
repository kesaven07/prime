import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import ResponsiveFlex from 'elements/ResponsiveFlex';
import { Text } from 'elements/Text';
import Benefits from './Benefits';

const Container = styled(SectionContainer, {});

const ImageContainer = styled('div', {
  position: 'relative',
  flex: 0.8,
  textAlign: 'center',
});

const StyledObject = styled('object', {
  width: '400px',
  height: '400px',
  objectFit: 'contain',

  '@bp8': {
    width: '90%',
  },
});

const Intro = ({ text, imagePath, benefits }) => {
  return (
    <Container aria-labelledby='intro_title'>
      <Layout>
        <ResponsiveFlex gapY='$9'>
          <Text id='intro_title' as='h2' hidden>
            Intro
          </Text>
          <Text
            as='p'
            type='h6'
            css={{
              flex: 1,
              '@bp8': {
                order: 2,
                textAlign: 'center',
                verticalAlign: 'center',
              },
            }}
          >
            {text}
          </Text>
          <ImageContainer>
            <StyledObject
              type='image/svg+xml'
              className='image'
              data={imagePath}
              aria-label='Decorative image'
            ></StyledObject>
          </ImageContainer>
        </ResponsiveFlex>
        <Benefits benefits={benefits} />
      </Layout>
    </Container>
  );
};

export default Intro;
