import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import ResponsiveFlex from 'elements/ResponsiveFlex';
import SectionCopy from 'components/SectionCopy';
import Image from 'next/image';
import { Text } from 'elements/Text';
import ParagraphText from 'elements/ParagraphText';

const Container = styled(SectionContainer, {});

const TextContainer = styled('div', {
  flex: 2,
});

const StyledImage = styled(Image, {
  flex: 1,
});

const Vision = ({ title, text, imagePath, id }) => {
  return (
    <Container id={id}>
      <Layout>
        <ResponsiveFlex ai='center'>
          <TextContainer css={{ '@bp8': { order: 2 } }}>
            <Text type='h4' as='h2' css={{ marginBottom: '$5' }}>
              {title}
            </Text>
            <ParagraphText type='b1' color='$primary200'>
              {text}
            </ParagraphText>
          </TextContainer>
          <StyledImage
            src={imagePath}
            width='462px'
            height='300px'
            objectFit='contain'
          />
        </ResponsiveFlex>
      </Layout>
    </Container>
  );
};

export default Vision;
