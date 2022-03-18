import { normalize } from 'normalize-stitches';

export default {
  ...normalize,
  '@font-face': [
    {
      fontFamily: 'Poppins',
      src: `
        local('Poppins Light'), local('Poppins-Light'),
        url('/fonts/Poppins-Black.ttf') format('truetype')
        url('/fonts/Poppins-Light.ttf') format('truetype')
        url('/fonts/Poppins-Regular.ttf') format('truetype')
      `,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      fontStretch: 'normal',
      unicodeRange: 'U+0020-2044',
    },
    {
      fontFamily: 'Poppins',
      src: `
        local('Poppins Semibold'), local('Poppins-SemiBold'),
        url('/fonts/Poppins-Black.ttf') format('truetype')
        url('/fonts/Poppins-Light.ttf') format('truetype')
        url('/fonts/Poppins-Regular.ttf') format('truetype')
        

      `,
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      fontStretch: 'normal',
      unicodeRange: 'U+0020-2044',
    },
  ],
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  html: {
    fontSize: '62.5%',
    fontFamily: `$primary, $system`,
  },
  body: {
    fontSize: '1.6rem',
    background: '$primary900',
    color: '$white',
    overflowX: 'hidden',
    margin: 0,
  },
  a: {
    color: '$white',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  'h1, h2, h3, h4, h5, h6, p': {
    margin: 0,
    fontWeight: 'normal',
  },
  ul: {
    padding: 0,
    listStyle: 'none',
    margin: 0,
  },
  cite: {
    fontStyle: 'normal',
  },
};
