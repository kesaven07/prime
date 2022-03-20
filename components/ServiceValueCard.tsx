import OutlineBox from 'elements/OutlineBox';
import { Text } from 'elements/Text';
import { styled } from 'stitches.config';

const Card = styled(OutlineBox, {
  position: 'relative',
  padding: '40px',
  width: '100%',
  cursor: 'default',
  transition: 'all .2s ease-out',

  $$outlineColor: '$colors$accenta500',

  '&::before': {
    inset: 0,
    opacity: 0,
    transition: 'all .2s ease-out',
  },

  '&:hover::before': {
    inset: '-12px',
    opacity: .5,
  },
});

const ServiceValueCard = ({ title, text, color }) => {
  return (
    <Card
      css={{
        // boxShadow: `0 0 0px .5px $colors${color}`,
        '&:hover': {
          backgroundColor: color,
          '.title': {
            color: '$white',
          },
          '.title::before': {
            backgroundColor: '$white',
          },
        },
      }}
    >
      <Text
        as='h3'
        type='h8'
        weight='bold'
        className='title'
        css={{
          position: 'relative',
          marginBottom: '14px',
          color: '$accenta400',
          '&:before': {
            position: 'absolute',
            content: '',
            left: '-30px',
            top: '5px',
            width: '3px',
            height: '20px',
            background: '$accenta500',
          },
        }}
      >
        {title}
      </Text>
      <Text as='p' type='b4' css={{ color: '$accenta100' }}>
        {text}
      </Text>
    </Card>
  );
};

export default ServiceValueCard;
