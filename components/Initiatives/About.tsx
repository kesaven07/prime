import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import { Text } from 'elements/Text';
import ResponsiveFlex from 'elements/ResponsiveFlex';
import Image from 'next/image';

const Container = styled(SectionContainer, {
  overflow: 'hidden',
});

const TextContainer = styled('div');

const ImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
  left: '100px',

  '@bp8': {
    left: 0,
    minHeight: '320px',
  },
});

const StyledImage = styled(Image, {});

const About = ({ id, title, description, imagePath }) => {
  return (
    <Container id={id}>
      <Layout>
        <ResponsiveFlex>
          <TextContainer css={{ flex: 2, '@bp8': { order: 2 } }}>
            <Text as='h2' type='h2' weight='bold'>
              {title}
            </Text>
            <Text as='p' type='b2' css={{ marginTop: '$6' }}>
              {description}
            </Text>
          </TextContainer>
          <ImageContainer css={{ flex: 3 }}>
            <StyledImage src={imagePath} layout='fill' objectFit='contain' />
          </ImageContainer>
        </ResponsiveFlex>
      </Layout>
    </Container>
  );
};

export default About;
