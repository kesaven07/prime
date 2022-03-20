import { styled } from 'stitches.config';
import Link from 'next/link';
import { Text } from 'elements/Text';
import { SidebarContext } from 'pages/_app';
import {
  useContext,
  useState,
} from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Button } from './Button';
import pages from 'data/pages';
import * as Accordion from '@radix-ui/react-accordion';
import ChevronDown from 'public/images/icons/chevron_down.svg';
import Flex from 'elements/Flex';
import CloseIcon from 'public/images/icons/close.svg';

const _Sidebar = styled('aside', {
  position: 'absolute',
  top: 0,
  zIndex: 9999,
  backgroundColor: '$primary800',
  height: '100vh',
  width: '80%',
  transform: 'translateX(-102%)',
  transition: 'transform .2s ease-out',
  padding: '$4',

  '@bp2': {
    width: '50%',
  },

  '@bp1': {
    padding: '$5',
  },
});

const NavList = styled('ul', {
  maxHeight: '75vh',
  overflowY: 'auto',
});

const NavItem = styled('li', {
  a: {
    display: 'block',
    padding: '$4 $2',
  },
});

const StyledHeader = styled(Accordion.Header, {
  display: 'flex',
  justifyContent: 'space-between',
  cursor: 'pointer',
  gap: '$2',
  alignItems: 'center',
  width: '90%',
});

const StyledTrigger = styled(Accordion.Trigger, {
  all: 'unset',
  justifyContent: 'space-between',
});

const StyledIcon = styled(ChevronDown, {
  width: '16px',
  height: '16px',
  fill: '$white',

  variants: {
    open: {
      true: {
        transform: 'rotate(180deg)',
      },
    },
  },
});

const SidebarNavItem = ({ name, path, items, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (items) {
    return (
      <Accordion.Root key={name} type='single' collapsible>
        <Accordion.Item value={name} key={name} title={name}>
          <StyledHeader>
            <NavItem onClick={onClick}>
              <Link href={path}>
                <a href={path}>
                  <Text type='h7' as='span' weight='bold'>
                    {name}
                  </Text>
                </a>
              </Link>
            </NavItem>
            <StyledTrigger onClick={() => setIsOpen((state) => !state)}>
              <StyledIcon open={isOpen} />
            </StyledTrigger>
          </StyledHeader>
          <Accordion.AccordionContent>
            <NavList css={{ marginLeft: '$2' }}>
              {items.map(({ title, path }) => (
                <NavItem key={title} onClick={onClick}>
                  <Link href={path}>
                    <a href={path}>{title}</a>
                  </Link>
                </NavItem>
              ))}
            </NavList>
          </Accordion.AccordionContent>
        </Accordion.Item>
      </Accordion.Root>
    );
  }
  return (
    <NavItem key={name} onClick={onClick}>
      <Link href={path}>
        <a href={path}>
          <Text type='h7' as='span' weight='bold'>
            {name}
          </Text>
        </a>
      </Link>
    </NavItem>
  );
};

const StyledCloseIcon = styled(CloseIcon, {
  width: '28px',
  height: '28px',
  fill: '$primary300',
  cursor: 'pointer',
});

const Sidebar = ({ open, navItems }) => {
  const { hide } = useContext(SidebarContext);

  return (
    <_Sidebar
      css={{ position: 'fixed', transform: open && 'translateX(0)' }}
      aria-labelledby='sidebar_title'
    >
      <Text id='sidebar_title' as='h2' hidden>
        Sidebar Navigation
      </Text>
      <OutsideClickHandler onOutsideClick={hide}>
        <nav aria-label='Sidebar'>
          <NavList>
            {Object.values(navItems)
              .filter(({ navVisible }) => navVisible)
              .map(({ name, path, children }) => (
                <SidebarNavItem
                  onClick={hide}
                  key={name}
                  name={name}
                  path={path}
                  items={children}
                />
              ))}
          </NavList>
        </nav>
        <Flex
          spaceBetweenCenter
          css={{ position: 'absolute', width: '80%', bottom: '100px' }}
        >
          <span onClick={hide}>
            <Button href={pages.contact.path} text='Get in touch' border />
          </span>
          <StyledCloseIcon onClick={() => hide()} />
        </Flex>
      </OutsideClickHandler>
    </_Sidebar>
  );
};

export default Sidebar;
