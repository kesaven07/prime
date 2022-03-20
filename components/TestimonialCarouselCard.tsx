import Flex from 'elements/Flex';
import { Text } from 'elements/Text';
import { styled } from 'stitches.config';

const Card = styled('div', {
  userSelect: 'none',
  padding: '$8 $5 $10',
});

interface testimonialData {
  text: string;
  author: string;
  designation: string;
  logo: any;
}

const TestimonialCarouselCard = ({
  text,
  author,
  designation,
  css,
}: {
  text: string;
  author: string;
  designation: string;
  css?: any;
}) => {
  return (
    <Card css={css}>
      <Text
        as='p'
        css={{ color: '$accentA100', marginBottom: '32px' }}
        type='b2'
      >
        {`“${text}”`}
      </Text>
      <Flex css={{ justifyContent: 'flex-end', gap: '12px' }}>
        <div style={{ textAlign: 'right' }}>
          <Text as='div' type='b3' weight='bold' css={{ color: '$white' }}>
            {author}
          </Text>
          <Text
            as='div'
            type={{ '@initial': 'b4', '@bp1': 'b3' }}
            css={{ color: '$accenta300' }}
          >
            {designation}
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
