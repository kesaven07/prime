import { Text } from 'elements/Text';
import { useState } from 'react';
import { styled } from 'stitches.config';
import ChevronRight from 'public/images/icons/chevron_right.svg';
import Flex from 'elements/Flex';

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  color: '$secondary200',
});

const List = styled('ul', {
  width: '100%',
  listStyleType: 'none',
  paddingLeft: '$5',
  borderLeft: '1px solid $secondary500_05',
});

const ListItem = styled('li', {
  position: 'relative',
  padding: '$2 $4',
  margin: '$2 0',
  cursor: 'pointer',

  variants: {
    selected: {
      true: {
        fontWeight: 'bold',
        boxShadow: '0 0 0 1px $colors$secondary500_05',
        color: '$secondary400',

        '.icon': {
          visibility: 'visible',
          fill: '$secondary400',
        },
      },
    },
  },
});

const ServiceCardSwitcher = ({ features, handleClick, css }) => {
  const ChevronRightStyled = styled(ChevronRight, {});
  return (
    <Container css={css}>
      <List>
        {features.map((feature, index) => (
          <ListItem
            tabIndex={1}
            selected={feature.selected}
            onClick={() => handleClick(index)}
            key={feature.title}
          >
            <Flex spaceBetweenCenter>
              <Text type='b3' css={{ lineHeight: '100%' }}>
                {feature.title}
              </Text>
              <ChevronRightStyled
                className='icon'
                css={{
                  visibility: 'hidden',
                  fill: '$secondary200',
                  width: '24px',
                }}
              />
            </Flex>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ServiceCardSwitcher;
