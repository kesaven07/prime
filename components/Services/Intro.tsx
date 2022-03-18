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
  flex: .8,
  width: '300px',
  height: '350px',
});

const Intro = ({ text, imagePath, benefits }) => {
  return (
    <Container>
      <Layout>
        <ResponsiveFlex gapY='$1'>
          <Text
            as='p'
            type='h6'
            css={{ flex: 1, '@bp8': { textAlign: 'center' } }}
          >
            {text}
          </Text>
          <ImageContainer>
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
        </ResponsiveFlex>
        <Benefits benefits={benefits} />
      </Layout>
    </Container>
  );
};

export default Intro;
