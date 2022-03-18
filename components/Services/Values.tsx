import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import { Text } from 'elements/Text';
import ServiceValueCard from 'components/ServiceValueCard';
import CardGrid from 'elements/CardGrid';
import SectionCopy from 'components/SectionCopy';

const Container = styled(SectionContainer, {});

const Header = styled('header', {
  textAlign: 'center',
});

const Values = ({ title, values }) => {
  return (
    <Container>
      <Layout>
        <Header>
          <SectionCopy center title={title} css={{ color: '$accenta400' }} />
        </Header>
        <CardGrid css={{ marginTop: '$12', '@bp2': { gap: '$5' } }}>
          {values.map(({ title, text }) => (
            <ServiceValueCard
              key={title}
              title={title}
              text={text}
              color='$accenta500'
            />
          ))}
        </CardGrid>
      </Layout>
    </Container>
  );
};

export default Values;
