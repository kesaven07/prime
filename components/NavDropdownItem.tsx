import Flex from 'elements/Flex';
import { Text } from 'elements/Text';
import { styled } from 'stitches.config';
import Link from 'next/link';
import ChevronRight from 'public/images/icons/chevron_right.svg';

const StyledChevronRight = styled(ChevronRight, {
  display: 'inline-block',
  fill: 'white',
  verticalAlign: 'middle',
  transition: 'margin-left ease-in-out 0.25s',
});

const NavDropdownItem = ({
  title,
  description,
  path,
  icon,
  color,
}: {
  title: string;
  description?: string;
  path: string;
  icon?: React.FunctionComponent;
  color?: string;
}) => {
  const Icon = styled(icon, {
    fill: color,
    width: '66px',
    height: '66px',
    flexShrink: 0,
    alignSelf: 'flex-start',
  });

  const StyleTitleText = styled(Text, {
    cursor: 'pointer',

    '&:hover': {
      '& svg': {
        marginLeft: '7px',
      },
    },
  });

  const StyledLink = styled('a', {
    '.chevron-right': {
      transition: 'transform .1s ease-in-out',
    },

    '&:hover': {
      '.chevron-right': {
        transform: 'translateX(5px)',
      },
    },
  });

  return (
    <Link href={path} passHref>
      <StyledLink>
        <Flex gap='$4' css={{ maxWidth: '360px' }}>
          {icon && <Icon />}
          <div>
            <Text
              as='p'
              type='b4'
              weight='bold'
              css={{
                marginBottom: '$1',
                color: '$primary100',
              }}
            >
              {title}{' '}
              <StyledChevronRight
                className='chevron-right'
                width='16px'
                height='16px'
              />
            </Text>
            {description && (
              <Text as='p' type='b5' css={{ color: '$primary200' }}>
                {description}
              </Text>
            )}
          </div>
        </Flex>
      </StyledLink>
    </Link>
  );
};

export default NavDropdownItem;
