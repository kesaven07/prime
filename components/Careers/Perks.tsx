import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import SectionCopy from 'components/SectionCopy';
import CardGrid from 'elements/CardGrid';
import CareerPerk from 'components/CareerPerk';

const Container = styled(SectionContainer, {});

const Perks = ({ title, text, perks }) => {
  return (
    <Container>
      <Layout>
        <SectionCopy title={title} text={text} center />
        <CardGrid gap='$10' css={{ marginTop: '$15' }}>
          {perks.map((perk) => (
            <CareerPerk
              key={perk.text}
              text={perk.text}
              imagePath={perk.imagePath}
            />
          ))}
        </CardGrid>
      </Layout>
    </Container>
  );
};

export default Perks;
