import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import { Text } from 'elements/Text';
import ResponsiveFlex from 'elements/ResponsiveFlex';

const Container = styled(SectionContainer, {});

const Intro = ({ textLeft, textRight }) => {
  return (
    <Container aria-labelledby='intro_title'>
      <Layout>
        <ResponsiveFlex gapX='$10' equalWidth>
          <Text id='intro_title' as='h2' hidden>Intro</Text>
          <Text type='b1' as='p'>
            {textLeft}
          </Text>
          <Text type='b1' as='p'>
            {textRight}
          </Text>
        </ResponsiveFlex>
      </Layout>
    </Container>
  );
};

export default Intro;
