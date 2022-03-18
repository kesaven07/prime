import { Text } from 'elements/Text';
import { styled } from 'stitches.config';
import Layout from '../elements/Layout';
import ChevronRight from 'public/images/icons/chevron_right.svg';
import contact from 'data/contact';

const Container = styled('section', {
  backgroundImage: 'url("/images/careers_hero_bg.png")',
  backgroundPositionX: 'center',
});

const InnerContainer = styled('div', {
  maxWidth: '592px',
  margin: '0 auto 40px',
  padding: '192px 0 0',
  textAlign: 'center',

  '@bp2': {
    margin: '0 0 60px',
    padding: '274px 0 0',
    textAlign: 'left',
  },
});

const StyledChevronRight = styled(ChevronRight, {
  display: 'inline-block',
  fill: '$accenta500',
  verticalAlign: 'middle',
  marginRight: '$2',
});

const CareersHero = ({ title, description }) => {
  return (
    <Container>
      <Layout>
        <InnerContainer>
          <Text as='h1' type='h1' weight='bold' css={{ margin: '0 0 $5' }}>
            {title}
          </Text>
          <Text
            as='p'
            type='b2'
            css={{
              margin: '0 0 $9',
              color: '$secondary200',
            }}
          >
            {description}
          </Text>
          <StyledChevronRight width='22px' height='22px' />
          <Text type='b3' css={{ color: '$secondary200', lineHeight: '1' }}>
            Apply now at{' '}
          </Text>
          <Text
            type='b3'
            css={{ a: { lineHeight: '1', color: '$accenta400' } }}
          >
            <a href={`mailto:${contact.emails.careers}`}>
              {contact.emails.careers}
            </a>
          </Text>
        </InnerContainer>
      </Layout>
    </Container>
  );
};

export default CareersHero;
