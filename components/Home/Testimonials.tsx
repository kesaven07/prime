import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import TestimonialCarouselCard from 'components/TestimonialCarouselCard';
import SectionContainer from 'elements/SectionContainer';
import SectionCopy from 'components/SectionCopy';
import ResponsiveFlex from 'elements/ResponsiveFlex';

const Container = styled(SectionContainer, {});

const Testimonials = ({ title, description, testimonials }) => {
  return (
    <Container>
      <Layout>
        <ResponsiveFlex gapX='$15' equalWidth>
          <TestimonialCarouselCard
            testimonialData={testimonials}
            css={{ '@bp8': { order: 2 } }}
          />
          <SectionCopy
            title={title}
            text={description}
            color='$accenta200'
            css={{ '@bp8': { order: 1 } }}
          />
        </ResponsiveFlex>
      </Layout>
    </Container>
  );
};

export default Testimonials;
