import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import Flex from 'elements/Flex';
import ResponsiveFlex from 'elements/ResponsiveFlex';
import SectionCopy from 'components/SectionCopy';
import Image from 'next/image';
import { logoScroll } from 'stitches.config/keyframes';

const Container = styled(SectionContainer, {});

const ImageGridContainer = styled('div', {
  position: 'relative',
  minHeight: '300px',
  maxHeight: '500px',
});

const ImageGrid = styled('div', {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '80%',
  minHeight: '120%',
  display: 'grid',
  gap: '$5',
  gridTemplate: 'repeat(4, 1fr) / repeat(3, 1fr)',
});

const ImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
});

const ScrollContainer = styled('div', {
  display: 'flex',
  overflow: 'hidden',
});

const LogoContainer = styled('div', {
  position: 'relative',
  width: '200px',
  height: '100px',

  '@bp2': {
    width: '300px',
  },
});

const imageGridRowPositions = [
  '1 / 2',
  '2 / 3',
  '3 / 4',
  '4 / 5',
  '3 / 4',
  '2 / 3',
];
const imageGridColumnPositions = [
  '2 / 3',
  '3 / 4',
  '3 / 4',
  '2 / 3',
  '1 / 2',
  '1 / 2',
];

const Partner = ({ id, title, text1, text2, collegeData }) => {
  const bodyCopy =
    text2 +
    '\n' +
    collegeData.map((college) => college.name).join(', ') +
    ', and many more';
  return (
    <Container id={id}>
      <Layout>
        <ResponsiveFlex equalWidth>
          <ResponsiveFlex gapY='$5'>
            <SectionCopy title={title} text={text1} />
            <SectionCopy text={bodyCopy} />
          </ResponsiveFlex>
        </ResponsiveFlex>
        <ScrollContainer>
          <Flex
            ai='center'
            css={{
              flexWrap: 'nowrap',
              marginTop: '$12',
              animation: `${logoScroll} 8s linear infinite`,
              '& > *': { flexShrink: 0 },
            }}
          >
            {collegeData.map((college) => (
              <LogoContainer key={college.name}>
                <Image
                  alt=''
                  layout='fill'
                  objectFit='contain'
                  priority={true}
                  src={college.logoPath}
                />
              </LogoContainer>
            ))}
            {collegeData.map((college) => (
              <LogoContainer key={college.name}>
                <Image
                  alt=''
                  layout='fill'
                  objectFit='contain'
                  src={college.logoPath}
                />
              </LogoContainer>
            ))}
          </Flex>
        </ScrollContainer>
      </Layout>
    </Container>
  );
};

export default Partner;
