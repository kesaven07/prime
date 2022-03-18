import React from 'react';
import { CSS, styled } from 'stitches.config';

const _Flex = styled('div', {
  display: 'flex',

  variants: {
    center: {
      true: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    spaceBetweenCenter: {
      true: {
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    },
    equalWidth: {
      true: {
        '> *': {
          flex: 1,
        },
      },
    },
  },
});

type PropType = {
  children: JSX.Element | JSX.Element[];
  as?: any;
  jc?: string;
  ai?: string;
  gap?: string;
  css?: CSS;
  equalWidth?: boolean;
  spaceBetweenCenter?: boolean;
  responsive?: any;
  center?: any;
};

const Flex = ({ children, as, jc, ai, gap, css, ...props }: PropType) => {
  return (
    <_Flex
      as={as}
      css={{
        justifyContent: jc,
        alignItems: ai,
        gap,
        ...css,
      }}
      {...props}
    >
      {children}
    </_Flex>
  );
};

export default Flex;
