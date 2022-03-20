import { styled } from 'stitches.config';
import Layout from 'elements/Layout';
import SectionContainer from 'elements/SectionContainer';
import { Text } from 'elements/Text';
import CardGrid from 'elements/CardGrid';
import ProfileCard from 'components/ProfileCard';
import ProfileDetailCard from 'components/ProfileDetailCard';
import { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const Container = styled(SectionContainer);

const Leadership = ({
  id,
  title,
  team,
}: {
  id?: string;
  title: string;
  team: {
    [key: string]: {
      name: string;
      designation: string;
      imagePath: string;
    };
  };
}) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = selected ? 'hidden' : 'auto';
  }, [selected]);

  return (
    <Container id={id} aria-labelledby='leadership_title'>
      <Layout>
        <Text id='leadership_title' as='h2' type='h4' css={{ textAlign: 'center' }}>
          {title}
        </Text>
        <CardGrid minWidth='265px' gap='$9' css={{ marginTop: '$15' }}>
          {Object.values(team).map((member, i) => (
            <ProfileCard
              onClick={() => setSelected(member)}
              key={i}
              name={member.name}
              designation={member.designation}
              imagePath={member.imagePath}
            />
          ))}
        </CardGrid>
        {selected && (
          <OutsideClickHandler onOutsideClick={() => setSelected(null)}>
            <ProfileDetailCard
              name={selected.name}
              designation={selected.designation}
              about={selected.about}
              imagePath={selected.imagePath}
              social={selected.social}
              onClose={() => setSelected(null)}
            />
          </OutsideClickHandler>
        )}
      </Layout>
    </Container>
  );
};

export default Leadership;
