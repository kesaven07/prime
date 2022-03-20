import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import ServiceBenefitCard from 'components/ServiceBenefitCard';
import ResponsiveFlex from 'elements/ResponsiveFlex';
import { Text } from 'elements/Text';

const Container = styled('section', {});

const Benefits = ({ benefits }) => {
  return (
    <Container aria-labelledby='benefits_title'>
      <Layout>
        <ResponsiveFlex
          equalWidth
          gapX='$3'
          gapY='$1'
          css={{ marginTop: '$13', '@bp8': { alignItems: 'center' } }}
        >
          <Text id='benefits_title' as='h2' hidden>Benefits</Text>
          {benefits.map(({ title, description, icon }, i) => (
            <ServiceBenefitCard
              key={title}
              title={title}
              text={description}
              icon={icon}
            />
          ))}
        </ResponsiveFlex>
      </Layout>
    </Container>
  );
};

export default Benefits;
