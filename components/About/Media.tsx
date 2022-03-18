import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import MediaKitTitleCTACard from 'components/MediaKitTitleCTACard';

const Container = styled(SectionContainer, {});

const Media = ({ title, text, buttonText }) => {
  return (
    <Container>
      <Layout>
        <MediaKitTitleCTACard
          title={title}
          text={text}
          buttonText={buttonText}
          css={{ margin: '0 auto' }}
        />
      </Layout>
    </Container>
  );
};

export default Media;
