import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import Flex from 'elements/Flex';
import { Text } from 'elements/Text';
import capabilities from 'data/capabilities';
import ServiceHomeCard from 'components/ServiceHomeCard';
import SectionContainer from 'elements/SectionContainer';
import CardGrid from 'elements/CardGrid';

const Container = styled(SectionContainer);

interface cardData {
  title: string;
  description: string;
  icon: JSX.Element;
  iconColor: string;
}

const Services = ({
  title,
  description,
  cardData,
}: {
  title: string;
  description: string;
  cardData: cardData[];
}) => {
  const StyledHeader = styled('header', {
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: '896px',
    marginBottom: '$10',
  });

  return (
    <Container aria-labelledby='services_title'>
      <Layout>
          <StyledHeader>
              <Text id='services_title' as='h2' type='h4' css={{ marginBottom: '$4' }}>
                  {title}
              </Text>
              <Text as='p' type='b1' css={{ color: '$secondary200' }}>
                  {description}
              </Text>
          </StyledHeader>
        <CardGrid gap='$3' minWidth='312px'>
          {cardData.map(({ title, description, icon, iconColor }, number) => (
            <ServiceHomeCard
              key={title}
              title={title}
              text={description}
              icon={icon}
              number={'0' + (number + 1)}
              iconColor={iconColor}
            />
          ))}
        </CardGrid>
      </Layout>
    </Container>
  );
};

export default Services;
