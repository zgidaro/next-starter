import { createStitches } from '@stitches/react'

export const { getCssText, globalCss, styled, css, keyframes } = createStitches(
  {
    theme: {
      colors: {
        foreground: '#343A40',
        background: '#ffffff',

        primary: '$blue500',
        // success: '$green500',
        success: '#32CD32',
        // error: '$error500',
        error: '#FF5733',
        neutral: '$gray500',

        gray500: 'hsl(206, 10%, 76%)',

        blue100: 'hsl(206, 100%, 70%)',
        blue200: 'hsl(206, 100%, 65%)',
        blue300: 'hsl(206, 100%, 60%)',
        blue400: 'hsl(206, 100%, 55%)',
        blue500: 'hsl(206, 100%, 50%)',
        blue600: 'hsl(206, 100%, 45%)',
        blue700: 'hsl(206, 100%, 40%)',
        blue800: 'hsl(206, 100%, 35%)',
        blue900: 'hsl(206, 100%, 30%)',

        purple500: 'hsl(252, 78%, 60%)',

        green300: 'hsl(148, 60%, 68%)',
        green400: 'hsl(148, 60%, 64%)',
        green500: 'hsl(148, 60%, 60%)',
        green600: 'hsl(148, 47%, 54%)',
        green700: 'hsl(148, 40%, 48%)',
        green800: 'hsl(148, 40%, 42%)',
        green900: 'hsl(148, 40%, 36%)',

        error500: 'hsl(352, 100%, 62%)',
        error600: 'hsl(352, 77%, 55%)',
        error700: 'hsl(352, 62%, 49%)',
        error800: 'hsl(352, 62%, 43%)',
        error900: 'hsl(352, 62%, 37%)',
      },
      space: {},
      fontSizes: {},
      fonts: {},
      fontWeights: {},
      lineHeights: {},
      letterSpacings: {},
      sizes: {},
      borderWidths: {},
      borderStyles: {},
      radii: {},
      shadows: {},
      zIndices: {},
      transitions: {},
    },
  },
)
