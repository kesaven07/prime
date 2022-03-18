import React from 'react';
import { Text } from 'elements/Text';
import { styled, CSS } from 'stitches.config';
import Link from 'next/link';

const Container = styled('a', {
  position: 'relative',
  display: 'inline-flex',
  padding: '1.4rem 2.6rem',
  background: 'initial',
  color: '$secondary500',
  alignItems: 'center',
  gap: '1em',
  cursor: 'pointer',
  border: 'none',
  transition: 'all .4s linear',
  $$color: 'CurrentColor',

  variants: {
    border: {
      true: {
        boxShadow: '0px 0px 0px 1px $$color',
        '.leftLine': {
          position: 'absolute',
          width: '5px',
          height: 'calc(100% + 2px)',
          top: -1,
          left: -5,
          backgroundColor: 'CurrentColor',
        },
      },
    },
    icon: {
      true: {
        padding: '1rem 2.6rem',
        svg: {
          fill: '$$color',
          width: '2.4rem',
          height: '2.4rem',
        },
      },
    },
    underline: {
      true: {
        padding: '0',
        '.buttonText': {
          paddingBottom: '1rem',
          borderBottom: '1px solid $$color',
        },
      },
    },
  },

  '&:hover': {
    backgroundColor: 'white',
    color: 'black',
    transition: 'all .4s linear'
  }

});

type ButtonProps = {
  text?: string;
  href: string;
  color?: string;
  border?: boolean;
  icon?: React.FunctionComponent;
  underline?: boolean;
  css?: CSS;
};

export const Button = ({
  text,
  href,
  color,
  border,
  icon,
  underline,
  css,
}: ButtonProps) => {
  const Icon = icon;

  return (
    <Link href={href}>
      <Container
        border={border}
        icon={!!icon}
        underline={underline}
        css={{ ...css, color }}
        href={href}
      >
        {border && <span className='leftLine'></span>}
        <Text
          className='buttonText'
          type='button1'
          weight='bold'
          css={{ minWidth: 'max-content' }}
        >
          {text}
        </Text>
        {icon && <Icon />}
      </Container>
    </Link>
  );
};
