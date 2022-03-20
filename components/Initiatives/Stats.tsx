import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import InitiativeStatCard from 'components/InitiativeStatCard';
import { Text } from 'elements/Text';

const Container = styled(SectionContainer, {});

const CardsContainer = styled('div', {
  position: 'relative',
  display: 'grid',
  gap: '$3',
  gridTemplateColumns: 'repeat(auto-fill, minmax(312px, 1fr))',
  maxWidth: '1456px',

  '@bp2': {
    gridTemplateRows: 'repeat(2, 1fr)',
    gridTemplateColumns: 'repeat(4, 1fr)',
    transform: 'translateX(15%)',
  },

  '@bp4': {
    transform: 'translateX(35%)',
  },

  '&::after': {
    position: 'absolute',
    content: '',
    right: 0,
    top: 0,
    bottom: 0,
    width: '40%',

    '@bp2': {
      background: 'linear-gradient(90deg, transparent, $primary900)',
    },
  },
});

const Stats = ({ stats }) => {
  return (
    <Container aria-labelledby='stats_title'>
      <Layout
        type={{ '@initial': 'fixed', '@bp2': 'fullWidth' }}
        css={{ overflow: 'hidden' }}
      >
        <Text id='stats_title' as='h2' hidden>Stats</Text>
        <CardsContainer>
          <InitiativeStatCard
            title={stats[0].title}
            text={stats[0].text}
            color='$accentb500'
          />
          <InitiativeStatCard
            title={stats[1].title}
            text={stats[1].text}
            color='$accentb500'
          />
          <InitiativeStatCard
            color='$accentb500'
            css={{
              display: 'none',
              '@bp2': { display: 'block' },
            }}
          />
          <InitiativeStatCard
            color='$accentb500'
            css={{
              display: 'none',
              '@bp2': { display: 'block' },
            }}
          />
          <InitiativeStatCard
            color='$accentb500'
            title={stats[2].title}
            text={stats[2].text}
            css={{
              '@bp2': { transform: 'translateX(60px)' },
            }}
          />
          <InitiativeStatCard
            color='$accentb500'
            title={stats[3].title}
            text={stats[3].text}
            css={{
              '@bp2': { transform: 'translateX(60px)' },
            }}
          />
          <InitiativeStatCard
            color='$accentb500'
            css={{
              display: 'none',
              '@bp2': { display: 'block', transform: 'translateX(60px)' },
            }}
          />
          <InitiativeStatCard
            color='$accentb500'
            css={{
              display: 'none',
              '@bp2': { display: 'block', transform: 'translateX(60px)' },
            }}
          />
        </CardsContainer>
      </Layout>
    </Container>
  );
};

export default Stats;
