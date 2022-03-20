import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import ResponsiveFlex from 'elements/ResponsiveFlex';
import Image from 'next/image';
import SectionCopy from 'components/SectionCopy';

const Container = styled(SectionContainer, {});

const ImageContainer = styled('div', {
  position: 'relative',
  minHeight: '220px',
  transform: 'scale(1.2)',
});

const Value = ({ title, text, imagePath }) => {
  return (
    <Container>
      <Layout>
        <ResponsiveFlex>
          <ImageContainer css={{ flex: 1 }}>
            <Image src={imagePath} layout='fill' objectFit='contain' alt={title}/>
          </ImageContainer>
          <SectionCopy title={title} text={text} css={{ flex: 3 }} />
        </ResponsiveFlex>
      </Layout>
    </Container>
  );
};

export default Value;
