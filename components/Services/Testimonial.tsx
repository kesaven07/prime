import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import Image from 'next/image';
import { Text } from 'elements/Text';

const Container = styled(SectionContainer, {
  backgroundColor: '$primary800',
  padding: 0,
  marginTop: '$21',
});

const ProfileImage = styled('div', {
  position: 'relative',
  width: '100px',
  height: '100px',
  margin: '0 auto $9',
  textAlign: 'center',
  borderRadius: '9999px',
  overflow: 'hidden',
});

const Footer = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  margin: '$5 auto 0',
  textAlign: 'center',
  color: '$accenta300',
});

const Testimonial = ({ text, author, designation, imagePath }) => {
  return (
    <Container aria-labelledby='testimonial_title'>
      <Layout as='figure' css={{ paddingTop: '$16', paddingBottom: '$16' }}>
        <Text id='testimonial_title' as='h2' hidden>Testimonial</Text>
        <ProfileImage>
          <Image src={imagePath} layout='fill' alt={`Picture of ${author}`}/>
        </ProfileImage>
        <Text
          as='blockquote'
          type='b2'
          css={{
            color: '$accenta100',
            margin: '0 auto',
            textAlign: 'center',
            maxWidth: '896px',
          }}
        >
          “{text}”
        </Text>
        <Footer as='figcaption'>
          <Text as='cite' type='b3' weight='bold' color=''>
            {author}
          </Text>
          <Text as='cite' type='b3' color='$accenta300'>
            {designation}
          </Text>
        </Footer>
      </Layout>
    </Container>
  );
};

export default Testimonial;
