import { Text } from 'elements/Text';
import { styled } from 'stitches.config';
import Image from 'next/image';

const Card = styled('div', {
  textAlign: 'center',
});

const ImageContainer = styled('div');

const CareerPerk = ({ text, imagePath }) => {
  return (
    <Card>
      <ImageContainer css={{ marginBottom: '$5' }}>
        <Image src={imagePath} width='82' height='66' />
      </ImageContainer>
      <Text type='b3' css={{ color: '$secondary200' }}>
        {text}
      </Text>
    </Card>
  );
};

export default CareerPerk;
