import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';
import breakpoints from 'stitches.config/breakpoints';
import colors from 'stitches.config/colors';
import space from 'stitches.config/space';
import fontSizes from 'stitches.config/fontSizes';
import fonts from 'stitches.config/fonts';
import globalStyle from 'stitches.config/globalStyle';
import blurs from 'stitches.config/blurs';

export const { styled, getCssText, globalCss, config, keyframes } =
  createStitches({
    theme: {
      colors,
      space,
      fontSizes,
      fonts,
      blurs,
    },
    media: breakpoints,
  });

export const globalStyles = globalCss(globalStyle);

export type CSS = Stitches.CSS<typeof config>;
