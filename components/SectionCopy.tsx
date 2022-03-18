import ParagraphText from 'elements/ParagraphText';
import { Text } from 'elements/Text';
import { styled } from 'stitches.config';

const Container = styled('div', {
  maxWidth: '592px',

  variants: {
    center: {
      true: {
        margin: '0 auto',
        textAlign: 'center',
      },
    },
  },
});

const SectionCopy = ({
  title,
  text,
  color = '$secondary200',
  hlevel = 'h2',
  center,
  css,
}: {
  title?: string;
  text?: string;
  color?: string;
  hlevel?: any;
  center?: boolean;
  css?: any;
}) => {
  return (
    <Container center={center} css={css}>
      {title && (
        <Text type='h4' weight='bold' as={hlevel} css={{ marginBottom: '$5' }}>
          {title}
        </Text>
      )}
      {text && (
        <ParagraphText color={color} type='b3'>
          {text}
        </ParagraphText>
      )}
    </Container>
  );
};

export default SectionCopy;
