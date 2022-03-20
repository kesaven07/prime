import { styled } from 'stitches.config';

const _CardGrid = styled('div', {
  display: 'grid',
});

const CardGrid = ({
  gap,
  minWidth = '312px',
  children,
  css,
}: {
  gap?: string;
  minWidth?: string;
  children: JSX.Element|JSX.Element[];
  css?: any;
}) => {
  return (
    <_CardGrid
      css={{
        gap: gap,
        gridTemplateColumns: `repeat(auto-fill, minmax(${minWidth}, 1fr))`,
        ...css,
      }}
    >
      {children}
    </_CardGrid>
  );
};

export default CardGrid;
