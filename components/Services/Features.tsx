import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import ServiceCardSwitcher from 'components/ServiceCardSwitcher';
import { useCallback, useEffect, useState } from 'react';
import ServiceDetailCard from 'components/ServiceDetailCard';
import { Button } from 'components/Button';
import pages from 'data/pages';
import RightArrow from 'public/images/icons/right_arrow.svg';
import ResponsiveFlex from 'elements/ResponsiveFlex';
import SectionCopy from 'components/SectionCopy';

const Container = styled(SectionContainer, {});

const Features = ({ title, description, features }) => {
  const [featuresList, setFeaturesList] = useState(() =>
    features.map((feature, index) => {
      return index !== 0 ? feature : { ...feature, selected: true };
    })
  );

  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  const handleClick = useCallback((index: number) => {
    setFeaturesList(
      featuresList.map((item, i) => {
        return { ...item, selected: i === index };
      })
    );
  }, []);

  useEffect(() => {
    setSelectedFeature(featuresList.filter(({ selected }) => selected)[0]);
  }, [featuresList]);

  return (
    <Container>
      <Layout type={{ '@initial': 'fullWidth', '@bp2': 'fixed' }}>
        <header>
          <SectionCopy
            title={title}
            text={description}
            css={{
              textAlign: 'center',
              margin: '0 auto',
              marginBottom: '$13',
              '@bp7': {
                padding: '0 28px',
              },
            }}
          />
        </header>
        <ResponsiveFlex equalWidth center gapX='$15'>
          <ServiceCardSwitcher
            features={featuresList}
            handleClick={handleClick}
            css={{
              alignSelf: 'stretch',
              padding: '0 28px',
              '@bp3': { alignSelf: 'flex-start' },
            }}
          />
          <ServiceDetailCard
            title={selectedFeature.title}
            text={selectedFeature.description}
            icon={selectedFeature.icon}
            button={
              <Button
                text='Get in touch'
                color='$secondary200'
                href={pages.contact.path}
                border
                icon={RightArrow}
              />
            }
          />
        </ResponsiveFlex>
      </Layout>
    </Container>
  );
};

export default Features;
