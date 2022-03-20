import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import { Text } from 'elements/Text';
import Flex from 'elements/Flex';
import TimelineCard from 'components/TimelineCard';

const Container = styled(SectionContainer, {});

const Timeline = styled(Flex, {
  position: 'relative',
  flexWrap: 'nowrap',
  flexDirection: 'row-reverse',

  overflowX: 'auto',

  '&::after': {
    position: 'absolute',
    content: '',
    top: '92px',

    right: '-0px',
    height: '1px',
    width: '8%',
    background: '$accenta200',
  },


  '@bp2': {
    '&::before, &::after': {
      top: '105px',
    },
  },

  '@bp4': {
    maxWidth: '1200px',
    margin: '0 auto',
  },

  '> *': {
    flexShrink: 0,
  },
});

const Journey = ({ title, textLeft, textRight, id }) => {
  return (
    <Container id={id} aria-labelledby='journey_title'>
      <Layout css={{ overflow: 'hidden' }}>
        <Text id='journey_title' as='h2' type='h4' css={{ textAlign: 'center' }}>
          {title}
        </Text>
        <Flex
          gap='$8'
          css={{
            marginTop: '$8',
            color: '$secondary200',
            '@bp7': { flexDirection: 'column' },
          }}
        >
          <Text as='p' type='b3' css={{ flex: 2 }}>
            {textLeft}
          </Text>
          <Text as='p' type='b3' css={{ flex: 3 }}>
            {textRight}
          </Text>
        </Flex>
      </Layout>
      <Timeline css={{ marginTop: '$12' }}>
        <TimelineCard
          year='2022 '
          text='Million Dollar Milestone'
          color='accenta'
        />
        <TimelineCard year='2020 ' text='Moved to Chennai ' color='accenta' />
        <TimelineCard
          year='2018'
          text='Startup Puducherry Award'
          color='accenta'
        />
        <TimelineCard year='2017' text='We Started' color='accenta' />
      </Timeline>
    </Container>
  );
};

export default Journey;
