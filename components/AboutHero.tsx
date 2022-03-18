import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import { Text } from 'elements/Text';
import Image from 'next/image';
import ArrowDown from 'public/images/icons/arrow_down.svg';
import OutlineBox from 'elements/OutlineBox';

const Container = styled(SectionContainer, {
  position: 'relative',
  background: '$primary800',
  padding: '273px 0',
  textAlign: 'center',
  marginBottom: '220px',
});

const ImageContainer = styled(OutlineBox, {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  maxWidth: '1176px',
  height: '520px',

  $$outlineColor: '$colors$secondary500',

  '@bp8': {
    '&::before': {
      display: 'none',
    },
  },
});

const StyledArrowDown = styled(ArrowDown, {
  fill: '$primary400',
  width: '64px',
  height: '64px',
});

const StyledHeader = styled('header', {
  maxWidth: '1048px',
  margin: '0 auto',
});

const AboutHero = ({ title, subtitle, imagePath }) => {
  return (
    <Container>
      <Layout>
        <StyledHeader>
          <Text as='h1' type='h2' weight='bold'>
            {title}
          </Text>
          <Text
            as='p'
            type='b3'
            css={{ color: '$primary200', marginTop: '$4' }}
          >
            {subtitle}
          </Text>
        </StyledHeader>
        <StyledArrowDown css={{ margin: '$6 0 $14' }} />
        <ImageContainer>
          <Image src={imagePath} layout='fill' objectFit='cover' priority />
        </ImageContainer>
      </Layout>
    </Container>
  );
};

export default AboutHero;
