import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import CallToActionCard from 'components/CallToActionCard';
import { Button } from 'components/Button';
import pages from 'data/pages';
import RightArrow from 'public/images/icons/right_arrow.svg';
import { Text } from 'elements/Text';

const Container = styled(SectionContainer, {});

const CTA = ({
  text,
  imagePath,
  css,
  showButton,
}: {
  text: any;
  imagePath?: string;
  css?: any;
  showButton?: boolean;
}) => {
  return (
    <Container css={css}>
      <Layout type={{ '@initial': 'fullWidth', '@bp2': 'fixed' }}>
        <CallToActionCard
          text={
            <Text
              className='text'
              as='p'
              type='b1'
              css={{
                marginBottom: '42px',
                maxWidth: '500px',
                width: '100%',
                a: {
                  textDecoration: 'underline',
                },
              }}
            >
              {text}
            </Text>
          }
          imagePath={imagePath}
          showButton={showButton}
          CTA={
            <Button
              href={pages.contact.path}
              text={`Let's Connect`}
              border
              icon={RightArrow}
              color='$secondary100'
            />
          }
        />
      </Layout>
    </Container>
  );
};

export default CTA;
