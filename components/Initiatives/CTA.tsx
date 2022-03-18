import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import { Text } from 'elements/Text';
import ParagraphText from 'elements/ParagraphText';

const Container = styled(SectionContainer, {});

const StyledLayout = styled(Layout, {
  display: 'grid',
  gridTemplateColumns: '1fr 9fr',
  gap: '$2',

  '@bp7': {
    gridTemplateColumns: '1fr',
  },
});

const DecoBox = styled('div', {
  boxShadow: '0 0 0 .6px $colors$accentb500',
  opacity: '.5',

  '@bp7': {
    display: 'none',
  },
});

const Content = styled('div', {
  backgroundImage: '$primaryGradient7, url(images/initiatives_cta_bg.jpg)',
  padding: '$21 0 $21 $20',
  backgroundSize: 'cover',

  '@bp7': {
    padding: '$15 $9',
  },
});

const CTA = ({ title, text, button }) => {
  return (
    <Container>
      <StyledLayout type='fullWidth'>
        <DecoBox />
        <Content>
          <Text
            as='h2'
            type='h2'
            weight='bold'
            css={{
              maxWidth: '450px',
              color: '$accentb500',
            }}
          >
            {title}
          </Text>
          <ParagraphText
            as='p'
            type='b2'
            css={{
              maxWidth: '450px',
              marginTop: '$3',
              marginBottom: '$10',
            }}
          >
            {text}
          </ParagraphText>
          {button}
        </Content>
      </StyledLayout>
    </Container>
  );
};

export default CTA;
