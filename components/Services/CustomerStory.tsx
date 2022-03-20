import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import ResponsiveFlex from 'elements/ResponsiveFlex';
import SectionCopy from 'components/SectionCopy';

const Container = styled(SectionContainer, {});

const ImageContainer = styled('div', {
  position: 'relative',
  minHeight: '320px',

  '@bp8': {
    width: '100%',
  },
});

const StyledObject = styled('object', {
  width: '500px',
  height: '300px',
  objectFit: 'contain',

  '@bp8': {
    width: '100%',
  },
});

const CustomerStory = ({ title, text, imagePath }) => {
  return (
    <Container>
      <Layout>
        <ResponsiveFlex equalWidth ai='center'>
          <ImageContainer>
            <StyledObject
                type='image/svg+xml'
                className='image'
                data={imagePath}
            ></StyledObject>
          </ImageContainer>
          <SectionCopy title={title} text={text} />
        </ResponsiveFlex>
      </Layout>
    </Container>
  );
};

export default CustomerStory;
