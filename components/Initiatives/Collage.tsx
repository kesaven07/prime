import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import Image from 'next/image';

const Container = styled(SectionContainer, {});

const CollageGrid = styled('div', {
  position: 'relative',
  display: 'grid',
  gap: '$4',
  width: '100%',
  minWidth: '1100px',
  overflow: 'hidden',
  gridTemplateRows: '1fr 1fr',
  gridTemplateColumns: '4.47fr 1fr 4.12fr 4.47fr 2.97fr 3.77fr 2.92fr',
  left: '50%',
  transform: 'translateX(-50%)',
  minHeight: '300px',

  '@bp2': {
    minHeight: '500px',
    gridTemplateColumns: '4.47fr 1fr 4.12fr 7.47fr 2.97fr 3.77fr 2.92fr',
  },
});

const imageGridRowPositions = [...Array(9)].map((_, i) => {
  if (i === 4) return '1 / -1';
  if (i % 2) return '2 / -1';
  return '1 / 2';
});

const imageGridColumnPositions = [
  '1 / 3',
  '1 / 2',
  '3 / 4',
  '2 / 4',
  '4 / 5',
  '5 / 7',
  '5 / 6',
  '7 / 8',
  '6 / 8',
];

const ImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
});

const StyledImage = styled(Image);

const Collage = ({ imagePaths }) => {
  return (
    <Container>
      <Layout type='fullWidth' css={{ overflow: 'hidden' }}>
        <CollageGrid>
          {imagePaths.map((imagePath, i) => (
            <ImageContainer
              key={i}
              css={{
                gridRow: imageGridRowPositions[i],
                gridColumn: imageGridColumnPositions[i],
              }}
            >
              <StyledImage src={imagePath} layout='fill' objectFit='cover' />
            </ImageContainer>
          ))}
        </CollageGrid>
      </Layout>
    </Container>
  );
};

export default Collage;
