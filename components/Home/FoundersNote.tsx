import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import ResponsiveFlex from 'elements/ResponsiveFlex';
import Image from 'next/image';
import ParagraphText from 'elements/ParagraphText';
import { Text } from 'elements/Text';
import OutlineBox from 'elements/OutlineBox';
import Flex from 'elements/Flex';

const Container = styled(SectionContainer, {
  marginTop: '192px',
  padding: '$19 0',
  background: '$primary800',
});

const ImageContainer = styled(OutlineBox, {
  position: 'relative',
  width: '242px',
  height: '242px',
  overflow: 'hidden',
  borderRadius: '9999px',

  $$outlineColor: '$colors$accenta500',
});

const ParagraphContainer = styled('div', {
  position: 'relative',
  '&::before': {
    display: 'none',
    content: '“',
    color: '$accenta500',
    position: 'absolute',
    top: '-43px',
    left: '-26px',
    fontWeight: 'bold',
    fontSize: '$12',
  },

  '@bp3': {
    '&::before': {
      display: 'block',
      top: '-32px',
      left: '-40px',
    },
  },
});

const FoundersNote = ({ title, text, imagePath }) => {
  return (
    <Container>
      <Layout>
        <ResponsiveFlex equalWidth gapX='0'>
          <Flex center={{ '@initial': false, '@bp3': true }}>
            <ImageContainer>
              <Image src={imagePath} layout='fill' />
            </ImageContainer>
          </Flex>
          <ResponsiveFlex gapX='$10' gapY='$5' css={{ '@bp9': { flex: 2 } }}>
            <Text
              as='h2'
              type='h3'
              css={{
                '@bp3': {
                  transform: 'rotate(.5turn)',
                  writingMode: 'vertical-lr',
                },
              }}
            >
              {title}
            </Text>
            <ParagraphContainer>
              <ParagraphText type='b2'>{text}</ParagraphText>
            </ParagraphContainer>
          </ResponsiveFlex>
        </ResponsiveFlex>
      </Layout>
    </Container>
  );
};

export default FoundersNote;
