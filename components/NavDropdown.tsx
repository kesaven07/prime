import { styled } from 'stitches.config';

const Container = styled('div', {
  position: 'fixed',
  top: '100px',
  width: '80%',
  maxWidth: '1200px',
  left: '50%',
  transform: 'translateX(-50%) scale(0)',
  display: 'grid',
  padding: '$11 $9',
  backgroundColor: '$primary800',
  borderBottom: '5px solid $colors$secondary500',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '$5',
  alignItems: 'self-start',
  transformOrigin: 'top',
  opacity: 0,

  variants: {
    open: {
      true: {
        transition: 'opacity .1s ease-out',
        transform: 'translateX(-50%) scale(1)',
        opacity: 1,
      },
    },
  },
});

const NavDropdown = ({ children, open }: { children: any; open?: boolean }) => {
  return <Container open={open}>{children}</Container>;
};

export default NavDropdown;
