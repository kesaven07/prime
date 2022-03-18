import { styled } from 'stitches.config';

const Layout = styled('div', {
  width: '100%',

  variants: {
    type: {
      fixed: {
        margin: '0 auto',
        maxWidth: '1260px',
        padding: '0 28px',
      },
      fullWidth: {
        maxWidth: 'initial',
        margin: '0',
        padding: '0',
      },
    },
  },
  defaultVariants: {
    type: 'fixed',
  },
});

export default Layout;
