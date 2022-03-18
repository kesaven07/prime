import { Text } from 'elements/Text';
import { styled } from 'stitches.config';
import TimelineDotIcon from 'public/images/icons/timeline_dot.svg';

const Card = styled('div', {
  position: 'relative',
  textAlign: 'center',
  width: '280px',

  '&::before, &::after': {
    position: 'absolute',
    content: '',
    top: '105px',
    height: '1px',
    width: '50%',
  },
  '&::before': {
    left: '-30px',
  },
  '&::after': {
    right: '-30px',
  },

  '@bp7': {
    '&::before, &::after': {
      top: '92px',
    },
  },
});

const StyledIcon = styled(TimelineDotIcon, {
  display: 'block',
  margin: '$8 auto',
  width: '24px',
  height: '24px',
});

const TimelineCard = ({ year, color, text }) => {
  return (
    <Card
      css={{
        '&::before, &::after': {
          background: `$${color}200`,
        },
      }}
    >
      <Text type='h5' weight='bold' css={{ color: `$${color}400` }}>
        {year}
      </Text>
      <StyledIcon css={{ fill: `$${color}500` }} />
      <Text type='b3' css={{ color: `$${color}100` }}>
        {text}
      </Text>
    </Card>
  );
};

export default TimelineCard;
