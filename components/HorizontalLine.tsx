import { styled } from 'stitches.config';

const StyledLine = styled('hr', {
  height: '1px',
  border: 'none',
});

const HorizontalLine = ({
  color = '$primary700',
  css,
}: {
  color?: string;
  css?: any;
}) => {
  return <StyledLine css={{ backgroundColor: color, ...css }} />;
};

export default HorizontalLine;
