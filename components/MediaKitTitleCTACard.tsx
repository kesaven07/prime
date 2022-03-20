import pages from 'data/pages';
import OutlineBox from 'elements/OutlineBox';
import { Text } from 'elements/Text';
import { styled } from 'stitches.config';
import { Button } from './Button';

const Card = styled(OutlineBox, {
  position: 'relative',
  maxWidth: '1046px',
  width: '100%',
  backgroundColor: '$primary800',
  $$outlineColor: '$colors$secondary600',
  textAlign: 'center',
  padding: '$11 $3',

  '@bp7': {
    '&::before': {
      display: 'none',
    },
  },
});

const MediaKitTitleCTACard = ({ titleId, title, text, buttonText, css }) => {
  return (
    <Card css={css}>
      <Text id={titleId} as='h2' type='h6' css={{ marginBottom: '$4' }}>
        {title}
      </Text>
      <Text
        as='p'
        type='b2'
        css={{
          margin: '0 auto',
          maxWidth: '440px',
          marginBottom: '$6',
          color: '$secondary200',
        }}
      >
        {text}
      </Text>
      <Button href={pages.media.path} underline text={buttonText} />
    </Card>
  );
};

export default MediaKitTitleCTACard;
