import ResponsiveFlex from 'elements/ResponsiveFlex';
import { Text } from 'elements/Text';
import { styled } from 'stitches.config';
import Image from 'next/image';
import Layout from 'elements/Layout';
import ParagraphText from 'elements/ParagraphText';
import Facebook from 'public/images/icons/facebook.svg';
import Twitter from 'public/images/icons/twitter.svg';
import Instagram from 'public/images/icons/instagram.svg';
import Flex from 'elements/Flex';
import Close from 'public/images/icons/close.svg';
import OutlineBox from 'elements/OutlineBox';

const Card = styled(Layout, {
  position: 'fixed',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)',
  top: '50%',
  height: '90vh',
  overflowY: 'hidden',
  backgroundColor: '$secondary800',
  zIndex: '9999',
});

const Container = styled('div', {
  height: '100%',
  width: '100%',
  overflowY: 'auto',
  padding: '0 $9 $17',
  marginTop: '$17',

  '@bp4': {
    padding: '0 $21 $17',
    marginTop: '$17',
  },
});

const Content = styled('div', {
  paddingBottom: '$9',
});

const Aside = styled('aside', {
  width: '100%',
});

const StickyHeader = styled('header');

const ImageContainer = styled(OutlineBox, {
  position: 'relative',
  minHeight: '300px',
  width: '100%',
  minWidth: '280px',
  maxWidth: '360px',

  '@bp8': {
    transform: 'translateY(15px)',
  },

  $$outlineColor: '$colors$white',
});

const CloseIcon = styled(Close, {
  position: 'fixed',
  top: '$10',
  right: '$10',
  fill: '$primary100',
  width: '32px',
  height: '32px',
});

const ProfileDetailCard = ({
  name,
  designation,
  about,
  imagePath,
  social,
  onClose,
}) => {
  return (
    <Card css={{ padding: 0 }}>
      <CloseIcon
        onClick={() => onClose()}
        css={{
          cursor: 'pointer',
          zIndex: 1,
        }}
      />
      <Container>
        <ResponsiveFlex ai='flex-start' gapX='$12'>
          <Aside
            css={{
              top: '40px',
              '@bp3': {
                position: 'sticky',
                flexBasis: '320px',
                order: 2,
              },
            }}
          >
            <ImageContainer>
              <Image
                src={imagePath}
                layout='fill'
                objectFit='cover'
                alt={name}
              />
            </ImageContainer>
            <Flex gap='$8' ai='center' css={{ marginTop: '$7' }}>
              {social &&
                Object.entries(social).map(([key, link]) => {
                  const icon =
                    key === 'facebook'
                      ? Facebook
                      : key === 'twitter'
                      ? Twitter
                      : Instagram;
                  const Icon = styled(icon, {
                    width: '32px',
                    height: '32px',
                    fill: '$secondary200',
                  });
                  return (
                    <a
                      key={key}
                      href={link as string}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Icon alt={key} />
                    </a>
                  );
                })}
            </Flex>
          </Aside>
          <Content>
            <StickyHeader
              css={{
                '@bp3': {
                  position: 'sticky',
                  paddingBottom: '$6',
                },
                top: '0px',
                backgroundColor: '$secondary800',
              }}
            >
              <Text as='h3' type='h2' weight='bold'>
                {name}
              </Text>
              <Text
                as='p'
                type='b3'
                css={{ marginTop: '$3', fontStyle: 'italic' }}
              >
                {designation}
              </Text>
            </StickyHeader>
            <ParagraphText
              spacing='$4'
              as='p'
              type='b3'
              css={{ marginTop: '$4' }}
            >
              {about}
            </ParagraphText>
          </Content>
        </ResponsiveFlex>
      </Container>
    </Card>
  );
};

export default ProfileDetailCard;
