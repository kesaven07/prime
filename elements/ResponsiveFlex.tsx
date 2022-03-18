import { styled } from 'stitches.config';
import Flex from './Flex';

const _ResponsiveFlex = styled(Flex);

const ResponsiveFlex = ({
  children,
  equalWidth,
  center,
  gapX = '$7',
  gapY = '$12',
  css,
  ...props
}: {
  children: any;
  equalWidth?: boolean;
  center?: boolean;
  gapX?: string | number;
  gapY?: string | number;
  ai?: string;
  css?: any;
}) => (
  <_ResponsiveFlex
    equalWidth={equalWidth}
    center={center}
    css={{
      gap: gapY,
      flexDirection: 'column',
      '@bp3': {
        gap: gapX,
        flexDirection: 'row',
      },
      ...css,
    }}
    {...props}
  >
    {children}
  </_ResponsiveFlex>
);
export default ResponsiveFlex;
