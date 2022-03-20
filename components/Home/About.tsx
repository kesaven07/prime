import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import { Text } from 'elements/Text';
import OutlineBox from 'elements/OutlineBox';
import ServiceTitleCard from 'components/ServiceTitleCard';
import SectionContainer from 'elements/SectionContainer';

const Container = styled(SectionContainer);

const ServicesGrid = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '$4',
  justifyContent: 'center',

  '> *': {
    flex: '0 1 368px',
  },
});

const About = ({
  title,
  description,
  services,
}: {
  title: string;
  description: string;
  services: {
    [key: string]: {
      title: string;
      path: string;
      smallImagePath: string;
    };
  };
}) => {
  const StyledHeader = styled('header', {
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: '896px',
    marginBottom: '$10',
  });

  return (
    <Container aria-labelledby='about_title'>
      <Layout>
        <StyledHeader>
          <Text id='about_title' as='h2' type='h4' css={{ marginBottom: '$4' }}>
            {title}
          </Text>
          <Text as='p' type='b1' css={{ color: '$secondary200' }}>
            {description}
          </Text>
        </StyledHeader>
        <ServicesGrid>
          {Object.values(services).map(({ title, path, smallImagePath }) => (
            <ServiceTitleCard
              key={path}
              title={title}
              path={path}
              imagePath={smallImagePath}
            />
          ))}
        </ServicesGrid>
      </Layout>
    </Container>
  );
};

export default About;
