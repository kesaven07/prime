import { styled } from 'stitches.config';
import Image from 'next/image';
import { Text } from 'elements/Text';
import OutlineBox from 'elements/OutlineBox';

const Card = styled(OutlineBox, {
  position: 'relative',
  $$outlineColor: '$colors$secondary500',
  padding: '$3',
  cursor: 'pointer',

  '&::before': {
    display: 'none',
  },
  '&:hover::before': {
    display: 'block',
  },

  '.imageContainer': {
    position: 'relative',
    width: '100%',
    height: '324px',
    marginBottom: '$4',
  },
});

const ProfileCard = ({ name, designation, imagePath, onClick }) => {
  return (
    <Card onClick={onClick}>
      <div className='imageContainer'>
        <Image
          src={imagePath}
          alt='Profile Picture'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <Text
        as='h3'
        type='b2'
        weight='bold'
        css={{ marginBottom: 'calc($1 / 2)' }}
      >
        {name}
      </Text>
      <Text as='p' type='b3'>
        {designation}
      </Text>
    </Card>
  );
};

export default ProfileCard;
