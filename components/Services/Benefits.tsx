import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import ServiceBenefitCard from 'components/ServiceBenefitCard';
import Flex from 'elements/Flex';
import ResponsiveFlex from 'elements/ResponsiveFlex';

const Container = styled('div', {});

const colors = ['$accentc500', '$accenta500', '$accente500'];

const Benefits = ({ benefits }) => {
  return (
    <Container>
      <Layout>
        <ResponsiveFlex
          equalWidth
          gapX='$3'
          gapY='$1'
          css={{ marginTop: '$13', '@bp8': { alignItems: 'center' } }}
        >
          {benefits.map(({ title, description, icon }, i) => (
            <ServiceBenefitCard
              key={title}
              title={title}
              text={description}
              icon={icon}
              color={colors[i]}
            />
          ))}
        </ResponsiveFlex>
      </Layout>
    </Container>
  );
};

export default Benefits;
