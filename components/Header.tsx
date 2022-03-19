import Flex from 'elements/Flex';
import { styled } from 'stitches.config';
import LogoFull from 'public/images/logos/logo_full.svg';
import { Button } from './Button';
import Link from 'next/link';
import { Text } from 'elements/Text';
import pages from 'data/pages';
import HamburgerMenuIcon from 'public/images/icons/hamburger_menu.svg';
import { SidebarContext } from 'pages/_app';
import { useContext, useState } from 'react';
import NavDropdown from './NavDropdown';
import NavDropdownItem from './NavDropdownItem';

const Container = styled('header', {
  position: 'fixed',
  top: 0,
  width: '100%',
  padding: '$4 $5',
  zIndex: '999',
  backgroundColor: '$primary900_85',

  '@bp2': {
    padding: '$5 $5',
  },

  '@bp4': {
    padding: '$5 $11',
  },

  '@bp5': {
    padding: '$5 $17',
  },

  '@supports (backdrop-filter: blur(1px))': {
    backdropFilter: 'blur($blurs$5)',
    backgroundColor: '$primary900_35',
  },
});

const Nav = styled('nav', {
  display: 'none',
  '@bp4': {
    display: 'block',
  },
});

const HamburgerMenu = styled('button', {
  all: 'unset',
  display: 'block',
  cursor: 'pointer',
});

const StyledExternalLink = styled('a');

const StyledListItem = styled('li', {
  position: 'relative',
  cursor: 'pointer',

  '&:after': {
    position: 'absolute',
    content: ' ',
    display: 'block',
    width: '100%',
    transform: 'scaleX(0)',
    height: '1px',
    marginTop: '.25rem',
    background: 'currentColor',
    transition: 'transform .2s cubic-bezier(.4,.6,.6,1)',
    transformOrigin: 'left',
  },
  '&:hover': {
    '&:after': {
      transform: 'scaleX(1)',
    },
  },
});

const NavListItem = ({ name, path, dropdownItems, isExternal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const NavLink = isExternal ? StyledExternalLink : Link;

  return (
    <StyledListItem
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      key={path}
    >
      <NavLink href={path} >
        <Text
          type='b4'
          lineHeight100
          as='a'
          href={path}
          css={{
            position: 'relative',
            ...(isOpen && {
              '&::after': {
                content: '',
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '200px',
                height: '40px',
              },
            }),
          }}
        >
          {name}
        </Text>
      </NavLink>
      {dropdownItems && (
        <NavDropdown open={isOpen}>
          {dropdownItems.map(({ title, path, description, icon }) => (
            <NavDropdownItem
              key={title}
              path={path}
              title={title}
              description={description}
              icon={icon}
              color='$secondary500'
            />
          ))}
        </NavDropdown>
      )}
    </StyledListItem>
  );
};

const Header = () => {
  const { toggle } = useContext(SidebarContext);
  const StyledLogoFull = styled(LogoFull, {
    fill: '$white',
    width: '132px',
    height: '32px',

    '@bp2': {
      width: '163px',
      height: '41px',
    },
  });

  return (
    <Container>
      <Flex spaceBetweenCenter>
        <Link href='/'>
          <a>
            <StyledLogoFull />
          </a>
        </Link>
        <Nav>
          <Flex
            as='ul'
            spaceBetweenCenter
            css={{ listStyleType: 'none', gap: '$8', '@bp5': { gap: '$11' } }}
          >
            {Object.values(pages)
              .filter(({ navVisible }) => navVisible)
              .map(
                ({
                  name,
                  path,
                  children,
                  isExternal,
                }: {
                  name: string;
                  path: string;
                  children?: any;
                  isExternal?: boolean;
                }) => (
                  <NavListItem
                    key={path}
                    name={name}
                    path={path}
                    dropdownItems={children}
                    isExternal={isExternal}
                  />
                )
              )}
          </Flex>
        </Nav>
        <HamburgerMenu
          onClick={() => toggle()}
          css={{
            fill: '$primary200',
            marginLeft: 'auto',
            '@bp2': { marginRight: '$5' },
            '@bp4': { display: 'none' },
          }}
        >
          <HamburgerMenuIcon width='32px' height='32px' />
        </HamburgerMenu>
        <Button
          href={pages.contact.path}
          text='Contact Us'
          border
          css={{ '@bp7': { display: 'none' } }}
        />
      </Flex>
    </Container>
  );
};

export default Header;
