import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import TestimonialCarouselCard from 'components/TestimonialCarouselCard';
import SectionContainer from 'elements/SectionContainer';
import SectionCopy from 'components/SectionCopy';
import ResponsiveFlex from 'elements/ResponsiveFlex';
import OutlineBox from 'elements/OutlineBox';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Container = styled(SectionContainer, {});

const CardsContainer = styled(OutlineBox, {
  position: 'relative',
  backgroundImage: '$accentaGradient1',

  $$outlineColor: '$colors$accenta500',
});

const Testimonials = ({ title, description, testimonials }) => {
  return (
    <Container>
      <Layout>
        <ResponsiveFlex gapX='$15' equalWidth>
          <CardsContainer
            css={{ '@bp3': { alignSelf: 'flex-start' }, '@bp8': { order: 2 } }}
          >
            <Carousel
              autoPlay
              interval={4000}
              showStatus={false}
              showThumbs={false}
              showArrows={false}
              stopOnHover={true}
              emulateTouch
            >
              {testimonials.map(({ text, author, designation }) => (
                <TestimonialCarouselCard
                  text={text}
                  author={author}
                  designation={designation}
                />
              ))}
            </Carousel>
          </CardsContainer>
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
