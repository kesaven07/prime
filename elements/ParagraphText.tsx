import { styled } from 'stitches.config';
import { Text } from './Text';

const Container = styled('div', {});

const ParagraphText = ({
  children,
  as = 'p',
  type = 'b3',
  color,
  css,
  spacing = '$5',
  ...props
}: {
  children: string;
  as?: any;
  type?: any;
  color?: any;
  css?: any;
  spacing?: string;
  className?: string;
}) => {
  return (
    <Container
      css={{
        ...css,
        '> * + *': {
          marginTop: spacing,
        },
      }}
    >
      {children?.split(/\\n/).map((para) => (
        <Text
          key={para}
          as={as}
          type={type}
          css={{
            color: color,
          }}
          {...props}
        >
          {para}
        </Text>
      ))}
    </Container>
  );
};

export default ParagraphText;
