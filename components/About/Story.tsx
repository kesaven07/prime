import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import Image from 'next/image';
import SectionCopy from 'components/SectionCopy';
import ResponsiveFlex from 'elements/ResponsiveFlex';

const Container = styled(SectionContainer, {
  maxWidth: '1532px',
});

const ImageGrid = styled('div', {
  display: 'grid',
  gap: '$3',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr 1fr',
  width: '100%',
  height: '500px',

  '@bp3': {
    maxWidth: '45%',
  },
});

const imageGridRowPositions = ['1 / 3', '1 / 2', '3 / 4', '2 / 4'];
const imageGridColumnPositions = ['1 / 2', '2 / 3', '1 / 2', '2 / 3'];

const ImageContainer = styled('div', {
  position: 'relative',
});

const StyledImage = styled(Image, {});

const Story = ({ id, title, text, imagePaths }) => {
  return (
    <Container id={id}>
      <Layout type='fullWidth'>
        <ResponsiveFlex gapX='$14'>
          <ImageGrid>
            {imagePaths.map((imagePath, i) => (
              <ImageContainer
                key={imagePath}
                css={{
                  gridRow: imageGridRowPositions[i],
                  gridColumn: imageGridColumnPositions[i],
                }}
              >
                <StyledImage src={imagePath} layout='fill' objectFit='cover' />
              </ImageContainer>
            ))}
          </ImageGrid>
          <SectionCopy title={title} text={text} css={{ margin: '0 28px' }} />
        </ResponsiveFlex>
      </Layout>
    </Container>
  );
};

export default Story;
