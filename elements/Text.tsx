import { styled } from 'stitches.config';

const responsiveBreakpoint = '@bp2';

export const Text = styled('span', {
  variants: {
    weight: {
      normal: {
        fontWeight: 'normal',
      },
      bold: {
        fontWeight: 'bold',
      },
    },
    type: {
      b1: {
        fontSize: '$5',
        lineHeight: '160%',

        [responsiveBreakpoint]: {
          fontSize: '$6',
        },
      },
      b2: {
        fontSize: '$4',
        lineHeight: '160%',

        [responsiveBreakpoint]: {
          fontSize: '$5',
        },
      },
      b3: {
        fontSize: '$3',
        lineHeight: '170%',

        [responsiveBreakpoint]: {
          fontSize: '$4',
        },
      },
      b4: {
        fontSize: '$3',
        lineHeight: '170%',
      },
      b5: {
        fontSize: '$1',
        lineHeight: '170%',

        [responsiveBreakpoint]: {
          fontSize: '$2',
        },
      },
      b6: {
        fontSize: '$1',
        lineHeight: '170%',
      },
      h1: {
        fontSize: '$10',
        lineHeight: '110%',

        [responsiveBreakpoint]: {
          fontSize: '$12',
        },
      },
      h2: {
        fontSize: '$9',
        lineHeight: '110%',

        [responsiveBreakpoint]: {
          fontSize: '$11',
        },
      },
      h3: {
        fontSize: '$8',
        lineHeight: '110%',

        [responsiveBreakpoint]: {
          fontSize: '$10',
        },
      },
      h4: {
        fontSize: '$6',
        lineHeight: '130%',

        [responsiveBreakpoint]: {
          fontSize: '$9',
        },
      },
      h5: {
        fontSize: '$6',
        lineHeight: '140%',

        [responsiveBreakpoint]: {
          fontSize: '$8',
        },
      },
      h6: {
        fontSize: '$6',
        lineHeight: '130%',

        [responsiveBreakpoint]: {
          fontSize: '$7',
        },
      },
      h7: {
        fontSize: '$5',
        lineHeight: '130%',

        [responsiveBreakpoint]: {
          fontSize: '$6',
        },
      },
      h8: {
        fontSize: '$3',
        lineHeight: '130%',

        [responsiveBreakpoint]: {
          fontSize: '$4',
        },
      },
      button1: {
        fontSize: '$1',
        lineHeight: '100%',
        textTransform: 'uppercase',

        [responsiveBreakpoint]: {
          fontSize: '$2',
        },
      },
      button2: {
        fontSize: '$1',
        lineHeight: '100%',
        textTransform: 'uppercase',
      },
    },
    lineHeight100: {
      true: {
        lineHeight: '100%',
      },
    },
    caps: {
      true: {
        textTransform: 'uppercase',
      },
    },
    wide: {
      true: {
        letterSpacing: '1px',
      },
    },
  },
  defaultVariants: {
    type: 'b4',
    weight: 'normal',
    caps: false,
    wide: false,
  },
});
