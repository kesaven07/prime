import { styled } from 'stitches.config';
import { Text } from 'elements/Text';
import Image from 'next/image';
import OutlineBox from 'elements/OutlineBox';

const Card = styled(OutlineBox, {
  position: 'relative',
  listStyleType: 'none',
  background: '$primary800',

  $$outlineColor: '$colors$secondary500',
});

const ImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '230px',
  marginBottom: '$4',
  background: '$primary100',
});

const AwardCard = ({ title, imagePath }) => {
  return (
    <Card>
      <ImageContainer>
        <Image
          src={imagePath}
          loader={() => imagePath}
          alt='award_photo'
          layout='fill'
          objectFit='contain'
        />
      </ImageContainer>
      <Text
        as='h3'
        type='b2'
        weight='bold'
        css={{
          marginBottom: 'calc($1 / 2)',
          padding: '0 $5 $5',
        }}
      >
        {title}
      </Text>
    </Card>
  );
};

export default AwardCard;
