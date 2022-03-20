import { styled } from 'stitches.config';
import { Text } from 'elements/Text';
import Flex from 'elements/Flex';

const Card = styled('div', {
  display: 'block',
  width: '100%',
  padding: '$5',
  backgroundImage:
    '$primaryGradient1, url("images/service_home_card_bg_pattern.svg")',

  $$iconColor: '$secondary500',

  '@bp2': {
    padding: '$8',
  },

  '& .content': {
    marginTop: '$7',
  },

  svg: {
    width: '64px',
    height: '64px',
    fill: '$$iconColor',
  },
});

const ServiceHomeCard = ({ title, text, icon, number, iconColor }) => {
  const Icon = icon;

  return (
    <Card css={{ $$iconColor: iconColor && '$colors' + iconColor }}>
      <Flex spaceBetweenCenter>
        <Icon alt={title}/>
        <Text type='b1' weight='bold' css={{ color: '$primary500' }}>
          {number}
        </Text>
      </Flex>
      <div className='content'>
        <Text
          as='h3'
          type='b5'
          weight='bold'
          css={{ textTransform: 'uppercase', marginBottom: '$2' }}
        >
          {title}
        </Text>
        <Text as='p' type='b4' css={{ color: '$secondary200' }}>
          {text}
        </Text>
      </div>
    </Card>
  );
};

export default ServiceHomeCard;
