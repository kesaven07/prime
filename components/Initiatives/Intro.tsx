import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import { Text } from 'elements/Text';
import ResponsiveFlex from 'elements/ResponsiveFlex';

const Container = styled(SectionContainer, {});

const Intro = ({ textLeft, textRight }) => {
  return (
    <Container>
      <Layout>
        <ResponsiveFlex gapX='$10' equalWidth>
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
