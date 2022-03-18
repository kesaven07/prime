import { Text } from 'elements/Text';
import { styled } from 'stitches.config';

const Card = styled('div', {
  width: '100%',
  maxWidth: '390px',
  padding: '54px 12px 30px',
  textAlign: 'center',
  color: '$secondary200',

  '.image': {
    marginBottom: '32px',
  },
});

const ServiceBenefitCard = ({
  icon,
  title,
  text,
  color,
}: {
  icon: any;
  title: string;
  text: string;
  color: string;
}) => {
  const Icon = styled(icon);

  return (
    <Card>
      <Icon
        className='image'
        width='60px'
        height='60px'
        css={{ fill: color }}
      />
      <Text
        as='h2'
        type='b2'
        weight='bold'
        css={{ marginBottom: '12px', color: '$white' }}
      >
        {title}
      </Text>
      <Text as='p' type='b3'>
        {text}
      </Text>
    </Card>
  );
};

export default ServiceBenefitCard;
