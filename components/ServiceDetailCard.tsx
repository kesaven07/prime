import Flex from 'elements/Flex';
import OutlineBox from 'elements/OutlineBox';
import { Text } from 'elements/Text';
import { styled } from 'stitches.config';

const Card = styled(OutlineBox, {
  $$outlineColor: '$colors$secondary500',

  position: 'relative',
  width: '100%',
  maxWidth: '592px',
  padding: '$7 $7 $12',
  background: '$secondaryGradient1',
  color: '$secondary100',

  '@bp7': {
    padding: '$7 $5 $12',
    '&::before': {
      display: 'none',
    },
  },
});

const ServiceDetailCard = ({ title, text, icon, button }) => {
  const Icon = styled(icon, {
    width: '104px',
    height: '104px',
    fill: '$secondary300',

    '@bp7': {
      width: '88px',
      height: '88px',
    },
  });

  return (
    <Card>
      <Flex spaceBetweenCenter gap='16px' css={{ marginBottom: '35px' }}>
        <Icon />
        {button}
      </Flex>
      <Text as='h3' type='h8' weight='bold' css={{ marginBottom: '16px' }}>
        {title}
      </Text>
      <Text as='p' type='b3'>
        {text}
      </Text>
    </Card>
  );
};

export default ServiceDetailCard;
