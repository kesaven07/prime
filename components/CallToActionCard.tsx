import { styled } from 'stitches.config';
import OutlineBox from 'elements/OutlineBox';
import Flex from 'elements/Flex';

const Card = styled(OutlineBox, 'span', {
  $$outlineColor: '$colors$secondary500',

  position: 'relative',
  color: '$secondary100',
  backgroundImage: '$secondaryGradient1',
  padding: '$10 $7',
  textAlign: 'center',

  '.text': {
    margin: '0 auto 42px',
  },

  '.image': {
    display: 'none',
    right: '20px',
  },

  variants: {
    image: {
      true: {
        padding: '80px 90px',
        textAlign: 'left',

        '.text': {
          margin: '0 0 42px',
        },

        '.image': {
          display: 'block',
        },
      },
    },
    border: {
      false: {
        '&::before': {
          display: 'none',
        },
      },
    },
  },
});

const ImageContainer = styled('div', {
  '@bp8': {
    display: 'none',
  },
});

const CallToActionCard = ({
  text,
  imagePath,
  showButton,
  CTA,
}: {
  text: any;
  imagePath?: any;
  showButton?: boolean;
  CTA?: any;
}) => {
  return (
    <Card
      image={{ '@initial': false, '@bp3': true }}
      border={{ '@initial': true, '@bp7': false }}
    >
      <Flex spaceBetweenCenter gap='12px' css={{ width: '100%' }}>
        <div style={{ flexBasis: '100%' }}>
          {text}
          {showButton && CTA}
        </div>
        {imagePath && (
          <ImageContainer
            css={{
              flexBasis: '100%',
              '@bp8': {
                display: 'none',
              },
            }}
          >
            <object
              type='image/svg+xml'
              className='image'
              data={imagePath}
              style={{
                width: '500px',
                height: '300px',
                objectFit: 'contain',
              }}
              aria-label=''
            ></object>
          </ImageContainer>
        )}
      </Flex>
    </Card>
  );
};

export default CallToActionCard;
