import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import SectionCopy from 'components/SectionCopy';
import ResponsiveFlex from 'elements/ResponsiveFlex';
import Image from 'next/image';

const Container = styled(SectionContainer, {});

const StyledImage = styled(Image, {});

const ImageContainer = styled('div', {
  position: 'relative',
  maxWidth: '420px',
  minHeight: '300px',
});

const Intro = ({ title, text, imagePath }) => {
  return (
    <Container>
      <Layout>
        <ResponsiveFlex gapX='$12' css={{ justifyContent: 'space-between' }}>
          <SectionCopy
            title={title}
            text={text}
            css={{ flex: 2, '@bp8': { order: 2 } }}
          />
          <ImageContainer css={{ flex: 1 }}>
            <StyledImage src={imagePath} layout='fill' objectFit='cover' />
          </ImageContainer>
        </ResponsiveFlex>
      </Layout>
    </Container>
  );
};

export default Intro;
