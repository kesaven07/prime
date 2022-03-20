import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import { Text } from 'elements/Text';
import MediaKitCard from 'components/MediaKitCard';
import contact from 'data/contact';

const Container = styled(SectionContainer, {
  position: 'relative',
  paddingBottom: '$10',
});

const Pattern = styled('span', {
  position: 'absolute',
  top: '-20px',
  left: '-160px',
  zIndex: '-1',
  width: '320px',
  height: '320px',
  background: 'url("/images/patterns/cross_lines.svg")',
  backgroundSize: 'contain',
});

const PressKit = ({ title, downloadPath }) => {
  const footerContents = (
    <>
      <Text type='b2'>For press inquiries, please contact</Text>
      <br />
      <Text type='b2' css={{ a: { color: '$accenta500' } }}>
        <a href={`mailto: ${contact.emails.info}`}>{contact.emails.info}</a>
      </Text>
    </>
  );

  return (
    <Container aria-labelledby='media_title'>
      <Layout
        type={{ '@bp6': 'fullWidth' }}
        css={{ position: 'relative', maxWidth: '920px', margin: '0 auto' }}
      >
        <Text
          id='media_title'
          as='h1'
          type='h1'
          weight='bold'
          css={{ marginBottom: '$8', '@bp2': { marginLeft: '$2' } }}
        >
          {title}
        </Text>
        <MediaKitCard
          title='Download Our Media Kit'
          downloadPath={downloadPath}
          footer={footerContents}
        />
        <Pattern />
      </Layout>
    </Container>
  );
};

export default PressKit;
