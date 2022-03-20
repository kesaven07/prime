import React from 'react';
import { Text } from 'elements/Text';
import { styled, CSS } from 'stitches.config';

const Container = styled('a', {
  position: 'relative',
  display: 'inline-flex',
  padding: '1.4rem 2.6rem',
  background: 'initial',
  color: '$secondary500',
  alignItems: 'center',
  gap: '1em',
  cursor: 'pointer',
  transition: 'all .2s linear',
  border: 'none',

  $$color: 'CurrentColor',

  '&:hover': {
    color: '$secondary200',
    transition: 'all .2s ease-out',
  },

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
        '&:hover': {
          backgroundColor: '$secondary100',
          color: '$secondary800',
          transition: 'all .2s ease-out',
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
});

type ButtonProps = {
  text?: string;
  color?: string;
  border?: boolean;
  icon?: React.FunctionComponent;
  underline?: boolean;
  css?: CSS;
  onClick?: () => void;
  type: 'reset' | 'submit';
};

const StyledButton = styled('button', {
  background: 'transparent',
  border: 'none',
});

export const SubmitButton = ({
  text,
  color,
  border,
  icon,
  underline,
  css,
  onClick,
  type,
}: ButtonProps) => {
  const Icon = icon;
  return (
    <StyledButton type={type} onClick={onClick}>
      <Container
        border={border}
        icon={!!icon}
        underline={underline}
        css={{ ...css, color }}
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
    </StyledButton>
  );
};
