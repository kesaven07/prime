import { styled } from 'stitches.config';

const OutlineBox = styled('div', {
  '&::before': {
    position: 'absolute',
    content: '',
    inset: '-12px',
    boxShadow: '0 0 0 1px $$outlineColor',
    zIndex: '-1',
    opacity: 0.5,
  },
});

export default OutlineBox;
