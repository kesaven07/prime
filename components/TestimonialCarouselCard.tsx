import Flex from 'elements/Flex';
import OutlineBox from 'elements/OutlineBox';
import { Text } from 'elements/Text';
import { styled } from 'stitches.config';

const Card = styled(OutlineBox, {
  position: 'relative',
  backgroundImage: '$accentaGradient1',
  padding: '64px 28px',

  '$$outlineColor': '$colors$accenta500',

  svg: {
    fill: '$accenta300',
  },

  '& .dots': {
    position: 'absolute',
    bottom: '38px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '12px',

    '& span': {
      backgroundColor: '$accenta400',
      borderRadius: '50%',
      width: '12px',
      height: '12px',

      '&.active': {
        backgroundColor: '$accenta300',
      },
    },
  },

  '@bp2': {
    padding: '65px 45px',
  },
});

interface testimonialData {
  text: string;
  author: string;
  designation: string;
  logo: any;
}

const TestimonialCarouselCard = ({
  testimonialData,
  css,
}: {
  testimonialData: testimonialData[];
  css?: any;
}) => {
  const Logo = testimonialData[0].logo;

  return (
    <Card css={css}>
      <Text
        as='p'
        css={{ color: '$accentA100', marginBottom: '32px' }}
        type='b2'
      >
        {`“${testimonialData[0].text}”`}
      </Text>
      <Flex css={{ justifyContent: 'flex-end', gap: '12px' }}>
        <div style={{ textAlign: 'right' }}>
          <Text as='div' type='b3' weight='bold' css={{ color: '$white' }}>
            {testimonialData[0].author}
          </Text>
          <Text
            as='div'
            type={{ '@initial': 'b4', '@bp1': 'b3' }}
            css={{ color: '$accenta300' }}
          >
            {testimonialData[0].designation}
          </Text>
        </div>
      </Flex>
      {/* <div className='dots'>
        <span></span>
        <span className='active'></span>
        <span></span>
      </div> */}
    </Card>
  );
};

export default TestimonialCarouselCard;
