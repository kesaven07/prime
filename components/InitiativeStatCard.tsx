import { Text } from 'elements/Text';
import { styled } from 'stitches.config';

const Card = styled('div', {
  width: '100%',
  minWidth: '320px',
  minHeight: '230px',
  textAlign: 'center',
  padding: '$10 $3',
  border: '.5px solid $$borderColor',
  cursor: 'default',

  '@bp7': {
    minWidth: '220px',
    minHeight: '120px',
  },
});

const InitiativeStatCard = ({
  title,
  text,
  color,
  css,
}: {
  title?: string;
  text?: string;
  color: string;
  css?: any;
}) => {
  return (
    <Card
      css={{
        '&:hover': {
          backgroundColor: color,
        },
        $$borderColor: '$colors' + color,
        ...css,
      }}
    >
      {title && (
        <Text as='p' type='h2' weight='bold' css={{ marginBottom: '$4' }}>
          {title}
        </Text>
      )}
      {text && (
        <Text as='p' type='b2'>
          {text}
        </Text>
      )}
    </Card>
  );
};

export default InitiativeStatCard;
